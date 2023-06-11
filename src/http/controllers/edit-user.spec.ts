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
    const createResponse = await request(app.server).post('/users').send({
      name: 'Miranha',
      job: 'Homem-aranha',
    })

    const { user: newUser } = JSON.parse(createResponse.text)

    const editResponse = await request(app.server).put('/users').send({
      name: 'Batman',
      job: 'Rico',
      id: newUser.id,
    })

    const { user: userEdit } = JSON.parse(editResponse.text)

    expect(editResponse.statusCode).toEqual(200)
    expect(userEdit).toEqual(
      expect.objectContaining({
        name: 'Batman',
        job: 'Rico',
      }),
    )
  })
})
