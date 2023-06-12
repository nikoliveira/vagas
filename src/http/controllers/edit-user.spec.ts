import request from 'supertest'
import { app } from '@/app'
import { describe, it, expect, beforeAll, afterAll } from 'vitest'

import { createAndAuthenticate } from '@/utils/create-and-get-token-user'

describe('Edit user (E2E)', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })

  it('slould be able to edit user', async () => {
    const token = await createAndAuthenticate(app, true)

    const createResponse = await request(app.server).post('/users').send({
      name: 'Miranha',
      job: 'Homem-aranha',
      password: '123asd',
      email: 'homemaranha@marvel.com',
    })

    const newUser = JSON.parse(createResponse.text)

    const editResponse = await request(app.server)
      .put(`/users?id=${newUser.id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Batman',
        job: 'Rico',
        email: 'batman@dc.com',
      })

    const userEdit = JSON.parse(editResponse.text)

    expect(editResponse.statusCode).toEqual(200)
    expect(userEdit).toEqual(
      expect.objectContaining({
        name: 'Batman',
        job: 'Rico',
      }),
    )
  })
})