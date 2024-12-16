import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export const config = {
  supabase: {
    url: process.env.SUPABASE_URL,
    anonKey: process.env.SUPABASE_ANON_KEY,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'default-jwt-secret',
    expiresIn: '24h',
  },
  server: {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'production',
    trustProxy: true,
    apiPrefix: '/api',
    host: process.env.HOST || '0.0.0.0' // Allow connections from all network interfaces
  },
  security: {
    cors: {
      allowedOrigins: process.env.CORS_ORIGINS?.split(',') || ['*']
    },
    rateLimit: {
      windowMs: 15 * 60 * 1000,
      max: process.env.RATE_LIMIT_MAX || 100
    }
  }
};