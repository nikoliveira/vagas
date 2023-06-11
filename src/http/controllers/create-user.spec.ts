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
    const response = await request(app.server).post('/users').send({
      name: 'Miranha',
      job: 'Homem-aranha',
    })

    const { user } = JSON.parse(response.text)

    expect(response.statusCode).toEqual(201)
    expect(user).toEqual(
      expect.objectContaining({
        id: expect.any(String),
      }),
    )
  })
})
