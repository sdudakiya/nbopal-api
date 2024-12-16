import { helmetMiddleware } from './helmet.js';
import { corsMiddleware } from './cors.js';
import { createRateLimiter } from './rateLimiter.js';

export const securityMiddleware = {
  helmet: helmetMiddleware,
  cors: corsMiddleware,
  rateLimiter: createRateLimiter
};