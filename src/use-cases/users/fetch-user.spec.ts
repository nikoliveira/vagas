import { describe, it, expect, beforeEach } from 'vitest'

import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { FetchUser } from './fetch-user'

import { randomUUID } from 'node:crypto'
import { UserNotExistsError } from '../errors/user-not-exists'

let usersRepository: InMemoryUsersRepository
let fetchUserUseCase: FetchUser

describe('Fetch User  Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    fetchUserUseCase = new FetchUser(usersRepository)
  })

  it('should be able to user profile', async () => {
    const userResponse = await usersRepository.create({
      name: 'Junior Ferreira',
      job: 'Software Developer',
    })

    const { user } = await fetchUserUseCase.execute({
      id: userResponse.id,
    })

    expect(user.id).toEqual(expect.any(String))
    expect(user.name).toEqual('Junior Ferreira')
  })

  it('should not be able to get user profile with wrong id', async () => {
    expect(() =>
      fetchUserUseCase.execute({
        id: randomUUID(),
      }),
    ).rejects.toBeInstanceOf(UserNotExistsError)
  })
})
