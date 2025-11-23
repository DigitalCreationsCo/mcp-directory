// cron-job.js
// This script is intended to be run by an external cron service (e.g. every hour).
// It triggers the scraper API with a different URL each time.

const API_URL = process.env.API_URL || 'http://localhost:3000/api/mcp/scrape';
const CRON_SECRET = process.env.CRON_SECRET || 'change_me_to_a_secure_random_string';

const URLS_TO_SCRAPE = [
  'https://github.com/topics/mcp-server',
  'https://github.com/topics/model-context-protocol',
  'https://www.npmjs.com/search?q=mcp-server',
  'https://github.com/modelcontextprotocol/servers'
];

async function runCron() {
  // Round Robin Selection based on the current hour
  // This ensures that if the cron runs hourly, it cycles through the list.
  const currentHour = new Date().getHours();
  const urlIndex = currentHour % URLS_TO_SCRAPE.length;
  const targetUrl = URLS_TO_SCRAPE[urlIndex];

  console.log(`[Cron] Starting job at ${new Date().toISOString()}`);
  console.log(`[Cron] Target URL: ${targetUrl}`);

  try {
    const response = await fetch(API_URL, {
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
  } catch (error) {
    console.error('[Cron] Error:', error);
    process.exit(1);
  }
}

runCron();
