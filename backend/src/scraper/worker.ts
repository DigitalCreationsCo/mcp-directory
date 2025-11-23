import { Worker } from 'bullmq';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { McpServer, PrismaClient } from '@prisma/client';
import { parseMcpServers } from './llm';

const prisma = new PrismaClient();

const connection = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
};

export const workFer = new Worker('scraper-queue', async job => {
  const { url } = job.data;
  console.log(`Processing scrape job for: ${url}`);

  try {
    // 1. Scrape Content
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; McpDirectoryBot/1.0; +http://example.com)'
      }
    });
    const $ = cheerio.load(response.data);
    
    // Remove script/style tags to reduce token usage
    $('script').remove();
    $('style').remove();
    const textContent = $('body').text().replace(/\s+/g, ' ').trim();

    // 2. Fetch Existing Servers for Deduplication
    const existing = await prisma.mcpServer.findMany({
      select: { name: true }
    });
    const existingNames = existing.map((e) => e.name);

    // 3. Use LLM to Parse and Deduplicate
    const newServers = await parseMcpServers(url, textContent, existingNames);

    if (newServers.length === 0) {
      console.log(`No new servers found on ${url}`);
      return { count: 0 };
    }

    // 4. Insert into Database
    let insertedCount = 0;
    for (const server of newServers) {
      try {
        await prisma.mcpServer.create({
          data: {
            name: server.name,
            description: server.description || '',
            command: server.command,
            args: server.args || [],
            env: server.env || null, // Prisma handles Json type now
            logoUrl: server.logoUrl,
            rating: server.rating || 0,
            tags: server.tags || [],
            author: server.author,
            sourceUrl: url
          }
        });
        insertedCount++;
      } catch (e) {
        console.error(`Failed to insert server ${server.name}:`, e);
      }
    }

    console.log(`Successfully inserted ${insertedCount} new servers from ${url}`);
    return { count: insertedCount };

  } catch (error) {
    console.error(`Scrape failed for ${url}:`, error);
    throw error;
  }
}, { connection });

console.log('Scraper worker started...');
