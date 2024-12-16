import rateLimit from 'express-rate-limit';
import { config } from '../../config/index.js';

export const createRateLimiter = (options = {}) => rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  // Use a custom key generator that handles missing IP addresses
  keyGenerator: (req) => {
    const ip = req.ip || 
               req.headers['x-forwarded-for'] || 
               req.socket.remoteAddress ||
               'unknown';
    return `${ip}-${req.url}`;
  },
  skip: () => config.server.env === 'development',
  ...options
});