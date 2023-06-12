import request from 'supertest'
import { app } from '@/app'
import { describe, it, expect, beforeAll, afterAll } from 'vitest'

describe('Fetch user (E2E)', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })

  it('slould be able to get user', async () => {
    const responseCreate = await request(app.server).post('/users').send({
      name: 'Miranha',
      job: 'Homem-aranha',
      password: '123asd',
      email: 'homemaranha@marvel.com',
    })

    const { id } = JSON.parse(responseCreate.text)

    const response = await request(app.server).get(`/user?id=${id}`).send()

    const user = JSON.parse(response.text)

    expect(response.statusCode).toEqual(200)
    expect(user).toEqual(
      expect.objectContaining({
        name: 'Miranha',
      }),
    )
  })
})
