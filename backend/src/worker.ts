import dotenv from 'dotenv';
dotenv.config();

// Import workers to start them
import './scraper/worker';

console.log('Worker process initialized.');
