import { supabase } from '../../config/supabase.js';

export const getHealthStatus = async () => {
  try {
    // Check database connection
    const { data, error } = await supabase.from('users').select('count').limit(1);
    const dbStatus = error ? 'error' : 'healthy';

    return {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      services: {
        database: dbStatus,
        api: 'healthy'
      },
      version: process.env.npm_package_version || '1.0.0'
    };
  } catch (error) {
    return {
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      services: {
        database: 'error',
        api: 'healthy'
      },
      error: error.message
    };
  }
};