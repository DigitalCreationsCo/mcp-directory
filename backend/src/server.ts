import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mcpRoutes from './routes/mcp';
import cronRoutes from './routes/cron';

dotenv.config();

const app = express();

// Security Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN?.split(',') : '*'
}));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

const port = process.env.PORT || 3000;

const prisma = new PrismaClient();

app.use(express.json());

app.use('/api/mcp', mcpRoutes);
app.use('/api/cron', cronRoutes);

app.get('/', (req, res) => {
  res.send('Hello from the AI SaaS Platform Backend!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
