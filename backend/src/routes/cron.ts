import express from 'express';
import { cronAuth } from '../middleware/cronAuth';

const router = express.Router();

// Trigger a scrape job (Protected)
router.get('/', cronAuth, async (req, res) => {

  const CRON_SECRET = process.env.CRON_SECRET || 'change_me_to_a_secure_random_string';

  const URLS_TO_SCRAPE = [
    'https://mcp.so/?tab=latest',
    'https://mcpservers.org/',
    'https://glama.ai/mcp/servers',
    'https://github.com/punkpeye/awesome-mcp-servers',
    'https://github.com/modelcontextprotocol/servers?tab=readme-ov-file',
    'https://cline.bot/mcp-marketplace',
  ];

  // Round Robin Selection based on the current hour
  // This ensures that if the cron runs hourly, it cycles through the list.
  const currentHour = new Date().getHours();
  const urlIndex = currentHour % URLS_TO_SCRAPE.length;
  const targetUrl = URLS_TO_SCRAPE[ urlIndex ];

  console.log(`[Cron] Starting job at ${new Date().toISOString()}`);
  console.log(`[Cron] Target URL: ${targetUrl}`);

  try {
    const response = await fetch("https://mcp-backend-tau.vercel.app/api/mcp/scrape", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${CRON_SECRET}`
      },
      body: JSON.stringify({ url: targetUrl })
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`API responded with ${response.status}: ${text}`);
    }

    const data = await response.json();
    console.log('[Cron] Success:', data);
    res.json({ message: '[Cron] Success:', data });
  } catch (error) {
      console.error('[Cron] Error:', error);
    res.status(500).json({ error: 'Failed to add scrape job' });
  }
});

export default router;
