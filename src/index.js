import express from 'express';
import { config } from './config/index.js';
import { middleware } from './middleware/index.js';
import { logger } from './utils/logger.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.js';

// Import routes
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import visitorRoutes from './routes/visitor.routes.js';
import vehicleRoutes from './routes/vehicle.routes.js';
import staffRoutes from './routes/staff.routes.js';
import notificationRoutes from './routes/notification.routes.js';
import healthRoutes from './routes/health.routes.js';

const app = express();

// Trust proxy if behind a reverse proxy
if (config.server.trustProxy) {
  app.set('trust proxy', 1);
}

// Security middleware
app.use(middleware.security.helmet);
app.use(middleware.security.cors);
app.use(middleware.security.rateLimiter());

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use(middleware.logging.morgan);

// Health check route (before API routes)
app.use('/api/health', healthRoutes);

// API routes
const apiRouter = express.Router();
apiRouter.use('/auth', authRoutes);
apiRouter.use('/users', userRoutes);
apiRouter.use('/visitors', visitorRoutes);
apiRouter.use('/vehicles', vehicleRoutes);
apiRouter.use('/staff', staffRoutes);
apiRouter.use('/notifications', notificationRoutes);

// Mount API routes under /api
app.use(config.server.apiPrefix, apiRouter);

// Root route handler
app.get('/', (req, res) => {
  res.json({
    message: 'MyGate API Server',
    version: process.env.npm_package_version,
    docs: '/api-docs'
  });
});

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Error handling
app.use(middleware.errorHandler);

// Start server
app.listen(config.server.port, config.server.host, () => {
  logger.info(`Server running on ${config.server.host}:${config.server.port}`);
});