"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.workFer = void 0;
const bullmq_1 = require("bullmq");
const axios_1 = __importDefault(require("axios"));
const cheerio = __importStar(require("cheerio"));
const client_1 = require("@prisma/client");
const llm_1 = require("./llm");
const prisma = new client_1.PrismaClient();
const connection = {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379'),
};
exports.workFer = new bullmq_1.Worker('scraper-queue', async (job) => {
    const { url } = job.data;
    console.log(`Processing scrape job for: ${url}`);
    try {
        // 1. Scrape Content
        const response = await axios_1.default.get(url, {
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
        const newServers = await (0, llm_1.parseMcpServers)(url, textContent, existingNames);
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
            }
            catch (e) {
                console.error(`Failed to insert server ${server.name}:`, e);
            }
        }
        console.log(`Successfully inserted ${insertedCount} new servers from ${url}`);
        return { count: insertedCount };
    }
    catch (error) {
        console.error(`Scrape failed for ${url}:`, error);
        throw error;
    }
}, { connection });
console.log('Scraper worker started...');
