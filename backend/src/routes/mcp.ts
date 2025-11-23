import express from 'express';
import { addScrapeJob } from '../scraper/queue';
import { cronAuth } from '../middleware/cronAuth';
import { prisma } from '../db';

const router = express.Router();

// Get all MCP servers (with optional search)
router.get('/', async (req, res) => {
  const { q } = req.query;

  try {
    const servers = await prisma.mcpServer.findMany({
      where: q
        ? {
            OR: [
              { name: { contains: String(q), mode: 'insensitive' } },
              { description: { contains: String(q), mode: 'insensitive' } },
            ],
          }
        : undefined,
    });
    res.json(servers);
  } catch (error) {
    console.error('Error fetching MCP servers:', error);
    res.status(500).json({ error: 'Failed to fetch MCP servers' });
  }
});

// Trigger a scrape job (Protected)
router.post('/scrape', cronAuth, async (req, res) => {
  const { url } = req.body;
  
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    await addScrapeJob(url);
    res.json({ message: 'Scrape job added to queue', url });
  } catch (error) {
    console.error('Error adding scrape job:', error);
    res.status(500).json({ error: 'Failed to add scrape job' });
  }
});

// Create a new MCP server
router.post('/', async (req, res) => {
  const { name, description, command, args, env, logoUrl } = req.body;

  try {
    const server = await prisma.mcpServer.create({
      data: {
        name,
        description,
        command,
        args,
        env,
        logoUrl,
      },
    });
    res.json(server);
  } catch (error) {
    console.error('Error creating MCP server:', error);
    res.status(500).json({ error: 'Failed to create MCP server' });
  }
});

export default router;
