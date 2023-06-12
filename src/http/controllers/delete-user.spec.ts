import request from 'supertest'
import { app } from '@/app'
import { describe, it, expect, beforeAll, afterAll } from 'vitest'

import { createAndAuthenticate } from '@/utils/create-and-get-token-user'
import { Role } from '@prisma/client'

describe('Create user (E2E)', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })

  it('slould be able to register', async () => {
    const token = await createAndAuthenticate(app, true)

    const createUser = await request(app.server).post('/users').send({
      name: 'Miranha',
      job: 'Homem-aranha',
      password: '123asd',
      email: 'homemaranha@marvel.com',
      role: Role.USER,
    })

    const { user } = JSON.parse(createUser.text)

    const responseDelete = await request(app.server)
      .delete(`/users?id=${user.id}`)
      .set('Authorization', `Bearer ${token}`)
      .send()

    const { message } = JSON.parse(responseDelete.text)

    expect(responseDelete.statusCode).toEqual(200)
    expect(message).toEqual(expect.any(String))
  })
})
