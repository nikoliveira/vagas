import request from 'supertest'
import { app } from '@/app'
import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { createAndAuthenticate } from '@/utils/create-and-get-token-user'
import { Role } from '@prisma/client'

describe('Fetch user views (E2E)', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })

  it('slould be able to get user acess', async () => {
    const token = await createAndAuthenticate(app)

    const createUser = await request(app.server).post('/users').send({
      name: 'Miranha',
      job: 'Homem-aranha',
      password: '123asd',
      email: 'homemaranha@marvel.com',
      role: Role.USER,
    })

    const { user } = JSON.parse(createUser.text)

    for (let i = 1; i <= 22; i++) {
      await request(app.server)
        .get(`/user?name=${user.name}`)
        .set('Authorization', `Bearer ${token}`)
        .send()
    }

    const response = await request(app.server)
      .get(`/users/access?name=${user.name}`)
      .set('Authorization', `Bearer ${token}`)
      .send()

    const { message } = JSON.parse(response.text)

    expect(response.statusCode).toEqual(200)
    expect(message).toEqual(expect.any(String))
  })
})
