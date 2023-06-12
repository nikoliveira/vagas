import { FastifyDynamicSwaggerOptions } from '@fastify/swagger'

export const swaggerOptions: FastifyDynamicSwaggerOptions = {
  swagger: {
    info: {
      title: 'API User',
      description: 'API Solid PostgreSQL',
      version: '1.0.0',
    },

    tags: [
      { name: 'Auth', description: 'Auth route' },
      { name: 'Admin', description: 'Admin routes' },
      { name: 'Users', description: 'Users routes' },
    ],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
        description: 'Bearer token authentication',
      },
    },
    definitions: {
      User: {
        type: 'object',
        required: ['email', 'name', 'password_hash', 'job'],
        properties: {
          id: { type: 'string', format: 'uuid' },

          name: { type: 'string' },
          email: { type: 'string', format: 'email' },
          password_hash: { type: 'string' },
          job: { type: 'string' },
          created_at: {
            type: 'string',
            format: 'date-time',
          },
          updated_at: {
            type: 'string',
            format: 'date-time',
          },
          role: {
            type: 'string',
            enum: ['USER', 'ADMIN'],
          },
        },
      },
    },
  },
}
