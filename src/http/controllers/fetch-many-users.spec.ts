import request from 'supertest'
import { app } from '@/app'
import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { createAndAuthenticate } from '@/utils/create-and-get-token-user'

describe('Fetch many users (E2E)', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })

  it('slould be able to get user', async () => {
    const token = await createAndAuthenticate(app, true)

    console.log(token, 'token')

    for (let i = 1; i <= 22; i++) {
      await request(app.server)
        .post('/users')
        .send({
          name: `Miranha ${i}`,
          job: `Homem-aranha ${i}`,
          password: '123asd',
          email: 'homemaranha@marvel.com',
          role: 'USER',
        })
    }

    const response = await request(app.server)
      .get('/users?page=2')
      .set('Authorization', `Bearer ${token}`)
      .send()

    // console.log(response)

    const { users, totalItems, totalPages, currentPage } = JSON.parse(
      response.text,
    )

    expect(response.statusCode).toEqual(200)
    expect(currentPage).toEqual(2)
    expect(totalItems).toEqual(23)
    expect(totalPages).toEqual(2)
    expect(users).toHaveLength(3)
  })
})
