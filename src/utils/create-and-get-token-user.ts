import { FastifyInstance } from 'fastify'
import request from 'supertest'

export async function createAndAuthenticate(
  app: FastifyInstance,
  isAdmin = false,
) {
  const email = 'junior@teste.com'
  const password = '123456'

  await request(app.server)
    .post('/users')
    .send({
      name: 'Junior Ferreira',
      email,
      password,
      job: 'Software Developer',
      role: isAdmin ? 'ADMIN' : 'USER',
    })

  const authResponse = await request(app.server).post('/sessions').send({
    email,
    password,
  })

  const { token } = authResponse.body

  return token
}
