import cors from 'cors';
import { config } from '../../config/index.js';

const corsOptions = {
  origin: config.server.env === 'production' 
    ? [/\.mygate\.com$/] // Allow only your domain in production
    : '*', // Allow all origins in development
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400 // 24 hours
};

export const corsMiddleware = cors(corsOptions);