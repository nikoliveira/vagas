import { describe, it, expect, beforeEach } from 'vitest'

import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { FetchUserByName } from './fetch-user-by-name'

import { UserNotExistsError } from '../errors/user-not-exists'

let usersRepository: InMemoryUsersRepository
let fetchUserByNameUseCase: FetchUserByName

describe('Fetch User By Name Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    fetchUserByNameUseCase = new FetchUserByName(usersRepository)
  })

  it('should be able to user profile', async () => {
    const userResponse = await usersRepository.create({
      name: 'Junior Ferreira',
      job: 'Software Developer',
    })

    const { user } = await fetchUserByNameUseCase.execute({
      name: userResponse.name,
    })

    expect(user.id).toEqual(expect.any(String))
    expect(user.name).toEqual('Junior Ferreira')
  })

  it('should not be able to get user profile with wrong name', async () => {
    expect(() =>
      fetchUserByNameUseCase.execute({
        name: 'Pedro Paulo',
      }),
    ).rejects.toBeInstanceOf(UserNotExistsError)
  })
})
