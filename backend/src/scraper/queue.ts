import { Queue } from 'bullmq';

const connection = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
};

export const scraperQueue = new Queue('scraper-queue', { connection });

export async function addScrapeJob(url: string) {
  return scraperQueue.add('scrape', { url });
}
