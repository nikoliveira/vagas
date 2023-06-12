import { describe, it, expect, beforeEach } from 'vitest'

import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { FetchManyUsersUseCase } from './fetch-many-users'
import { hash } from 'bcryptjs'

let usersRepository: InMemoryUsersRepository
let fetchManyUsersUseCase: FetchManyUsersUseCase

describe('Fetch Many Users Paginated  Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    fetchManyUsersUseCase = new FetchManyUsersUseCase(usersRepository)
  })

  it('should be able to user list paginated', async () => {
    for (let i = 1; i <= 22; i++) {
      await usersRepository.create({
        name: `User ${i}`,
        job: `Developer ${i}`,
        email: `user${i}@gmail.com`,
        password_hash: await hash('123456', 6),
        role: 'USER',
      })
    }

    const usersResponse = await fetchManyUsersUseCase.execute({
      page: 2,
    })

    expect(usersResponse.currentPage).toEqual(2)
    expect(usersResponse.totalItems).toEqual(22)
    expect(usersResponse.totalPages).toEqual(2)
  })
})
