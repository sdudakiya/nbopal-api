export default {
  openapi: '3.0.0',
  info: {
    title: 'MyGate API',
    version: '1.0.0',
    description: 'API documentation for MyGate Residential Community Management System'
  },
  servers: [
    {
      url: '/api',
      description: 'API Server'
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  security: [
    {
      bearerAuth: []
    }
  ],
  paths: {
    '/health': {
      get: {
        tags: ['Health'],
        summary: 'Check API health status',
        security: [],
        responses: {
          200: {
            description: 'Health check successful',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      example: 'healthy'
                    },
                    timestamp: {
                      type: 'string',
                      format: 'date-time'
                    },
                    services: {
                      type: 'object',
                      properties: {
                        database: {
                          type: 'string',
                          example: 'healthy'
                        },
                        api: {
                          type: 'string',
                          example: 'healthy'
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};