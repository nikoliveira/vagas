import { RouteShorthandOptions } from 'fastify'

interface schemasProps {
  createUser: RouteShorthandOptions
  editUser: RouteShorthandOptions
  authUser: RouteShorthandOptions
  fetchUser: RouteShorthandOptions
  fetchManyUsersPaginated: RouteShorthandOptions
  fetchUserViews: RouteShorthandOptions
  deleteUser: RouteShorthandOptions
}

export const schemasUsers: schemasProps = {
  createUser: {
    schema: {
      tags: ['Users'],
      summary: 'Create a new user',
      body: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          email: { type: 'string', format: 'email' },
          password: { type: 'string' },
          job: { type: 'string' },
          role: {
            type: 'string',
            enum: ['ADMIN', 'USER'],
          },
        },
      },
      response: {
        201: {
          description: 'Successful response',
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            job: { type: 'string' },
            name: { type: 'string' },
            views: { type: 'number' },
            role: {
              type: 'string',
              enum: ['USER', 'ADMIN'],
            },
            email: { type: 'string', format: 'email' },
            created_at: { type: 'string', format: 'date-time' },
            updated_at: { type: 'string', format: 'date-time' },
          },
        },
      },
    },
  },
  editUser: {
    schema: {
      tags: ['Admin'],
      summary: 'Edit user profile',
      querystring: {
        id: { type: 'string', format: 'uuid' },
      },
      body: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          email: { type: 'string', format: 'email' },
          job: { type: 'string' },
        },
      },
      response: {
        200: {
          description: 'Successful response',
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            job: { type: 'string' },
            name: { type: 'string' },
            views: { type: 'number' },
            role: {
              type: 'string',
              enum: ['USER', 'ADMIN'],
            },
            email: { type: 'string', format: 'email' },
            created_at: { type: 'string', format: 'date-time' },
            updated_at: { type: 'string', format: 'date-time' },
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
  },
  authUser: {
    schema: {
      tags: ['Auth'],
      summary: 'User Authentication',
      body: {
        type: 'object',
        properties: {
          email: { type: 'string', format: 'email' },
          password: { type: 'string' },
        },
      },
      response: {
        200: {
          description: 'Successful response',
          type: 'object',
          properties: {
            token: { type: 'string' },
          },
        },
      },
    },
  },

  fetchUser: {
    schema: {
      tags: ['Users'],
      summary: 'Fetch user profile',
      querystring: {
        id: { type: 'string', format: 'uuid' },
      },
      response: {
        200: {
          description: 'Successful response',
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            job: { type: 'string' },
            name: { type: 'string' },
            views: { type: 'number' },
            role: {
              type: 'string',
              enum: ['USER', 'ADMIN'],
            },
            email: { type: 'string', format: 'email' },
            created_at: { type: 'string', format: 'date-time' },
            updated_at: { type: 'string', format: 'date-time' },
          },
        },
      },
    },
  },
  fetchUserViews: {
    schema: {
      tags: ['Users'],
      summary: 'Fetch user views acess',
      querystring: {
        id: { type: 'string', format: 'uuid' },
      },
      response: {
        200: {
          description: 'Successful response',
          type: 'object',
          properties: {
            message: { type: 'string' },
          },
        },
      },
    },
  },
  deleteUser: {
    schema: {
      tags: ['Admin'],
      summary: 'Fetch user views acess',
      querystring: {
        id: { type: 'string', format: 'uuid' },
      },
      response: {
        200: {
          description: 'Successful response',
          type: 'object',
          properties: {
            message: { type: 'string' },
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
  },
  fetchManyUsersPaginated: {
    schema: {
      tags: ['Users'],
      summary: 'Fetch many users paginated',
      querystring: {
        page: { type: 'string' },
      },
      response: {
        200: {
          type: 'object',
          properties: {
            users: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string', format: 'uuid' },
                  job: { type: 'string' },
                  name: { type: 'string' },
                  views: { type: 'number' },
                  role: {
                    type: 'string',
                    enum: ['USER', 'ADMIN'],
                  },
                  email: { type: 'string', format: 'email' },
                  created_at: { type: 'string', format: 'date-time' },
                  updated_at: { type: 'string', format: 'date-time' },
                },
              },
            },
            currentPage: { type: 'number' },
            totalItems: { type: 'number' },
            totalPages: { type: 'number' },
          },
        },
      },
    },
  },
}
