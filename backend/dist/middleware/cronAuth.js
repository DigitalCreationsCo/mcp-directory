"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cronAuth = void 0;
const cronAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const cronSecret = process.env.CRON_SECRET;
    if (!cronSecret) {
        console.error('CRON_SECRET is not defined in environment variables.');
        return res.status(500).json({ error: 'Server configuration error' });
    }
    if (!authHeader || authHeader !== `Bearer ${cronSecret}`) {
        return res.status(401).json({ error: 'Unauthorized: Invalid Cron Secret' });
    }
    next();
};
exports.cronAuth = cronAuth;
