"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scraperQueue = void 0;
exports.addScrapeJob = addScrapeJob;
const bullmq_1 = require("bullmq");
const connection = {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379'),
};
exports.scraperQueue = new bullmq_1.Queue('scraper-queue', { connection });
async function addScrapeJob(url) {
    return exports.scraperQueue.add('scrape', { url });
}
