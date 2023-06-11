import request from 'supertest'
import { app } from '@/app'
import { describe, it, expect, beforeAll, afterAll } from 'vitest'

describe('Fetch user views (E2E)', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })

  it('slould be able to get user acess', async () => {
    const createUser = await request(app.server).post('/users').send({
      name: 'Miranha',
      job: 'Homem-aranha',
    })

    const { user } = JSON.parse(createUser.text)

    for (let i = 1; i <= 22; i++) {
      await request(app.server).get(`/user?name=${user.name}`).send()
    }

    const response = await request(app.server).get(
      `/users/access?name=${user.name}`,
    )

    const { message } = JSON.parse(response.text)

    expect(response.statusCode).toEqual(200)
    expect(message).toEqual(expect.any(String))
  })
})
