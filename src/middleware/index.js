import { securityMiddleware } from './security/index.js';
import { loggingMiddleware } from './logging/index.js';
import { authenticate } from './auth.js';
import { validate } from './validate.js';
import { errorHandler } from './errorHandler.js';

export const middleware = {
  security: securityMiddleware,
  logging: loggingMiddleware,
  authenticate,
  validate,
  errorHandler
};