import fastify from 'fastify'
import { ZodError } from 'zod'
import { env } from './env'
import { usersRoutes } from './http/controllers/routes'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import fastifyJwt from '@fastify/jwt'
import { swaggerOptions } from './swagger'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: '10m',
  },
})

app.register(fastifySwagger, swaggerOptions)
app.register(fastifySwaggerUi, {
  routePrefix: '/swagger',
})

app.register(usersRoutes)

app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: Here we should log to an external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})
