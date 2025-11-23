"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const queue_1 = require("../scraper/queue");
const cronAuth_1 = require("../middleware/cronAuth");
const router = express_1.default.Router();
const prisma = new client_1.PrismaClient();
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
    }
    catch (error) {
        console.error('Error fetching MCP servers:', error);
        res.status(500).json({ error: 'Failed to fetch MCP servers' });
    }
});
// Trigger a scrape job (Protected)
router.post('/scrape', cronAuth_1.cronAuth, async (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }
    try {
        await (0, queue_1.addScrapeJob)(url);
        res.json({ message: 'Scrape job added to queue', url });
    }
    catch (error) {
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
    }
    catch (error) {
        console.error('Error creating MCP server:', error);
        res.status(500).json({ error: 'Failed to create MCP server' });
    }
});
exports.default = router;
