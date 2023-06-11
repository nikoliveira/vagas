import request from 'supertest'
import { app } from '@/app'
import { describe, it, expect, beforeAll, afterAll } from 'vitest'

describe('Create user (E2E)', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })

  it('slould be able to register', async () => {
    const createUser = await request(app.server).post('/users').send({
      name: 'Miranha',
      job: 'Homem-aranha',
    })

    const { user } = JSON.parse(createUser.text)

    const responseDelete = await request(app.server).delete(
      `/users?id=${user.id}`,
    )

    const { message } = JSON.parse(responseDelete.text)

    expect(responseDelete.statusCode).toEqual(200)
    expect(message).toEqual(expect.any(String))
  })
})
