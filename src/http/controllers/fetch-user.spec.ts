import request from 'supertest'
import { app } from '@/app'
import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { createAndAuthenticate } from '@/utils/create-and-get-token-user'

describe('Fetch user (E2E)', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })

  it('slould be able to get user', async () => {
    const token = await createAndAuthenticate(app)

    await request(app.server).post('/users').send({
      name: 'Miranha',
      job: 'Homem-aranha',
      password: '123asd',
      email: 'homemaranha@marvel.com',
      role: 'USER',
    })

    const response = await request(app.server)
      .get('/user?name=Miranha')
      .set('Authorization', `Bearer ${token}`)
      .send()

    const { user } = JSON.parse(response.text)

    expect(response.statusCode).toEqual(200)
    expect(user).toEqual(
      expect.objectContaining({
        name: 'Miranha',
      }),
    )
  })
})
