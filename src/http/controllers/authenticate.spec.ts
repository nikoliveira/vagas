import request from 'supertest'
import { app } from '@/app'
import { describe, it, expect, beforeAll, afterAll } from 'vitest'

describe('Authenticate customer (E2E)', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })

  it('slould be able to authenticate', async () => {
    await request(app.server).post('/users').send({
      email: 'junior.teste@gmail.com',
      name: 'Junior Ferreira',
      password: '123456',
      job: 'Software Developer',
      role: 'ADMIN',
    })

    const response = await request(app.server).post('/sessions').send({
      email: 'junior.teste@gmail.com',
      password: '123456',
    })

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual({
      token: expect.any(String),
    })
  })
})
