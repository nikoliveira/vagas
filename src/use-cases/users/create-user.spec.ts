import { describe, it, expect, beforeEach } from 'vitest'

import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { CreateUser } from './create-user'

let usersRepository: InMemoryUsersRepository
let createUserUseCase: CreateUser

describe('Create User Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    createUserUseCase = new CreateUser(usersRepository)
  })

  it('should be able to create a new user', async () => {
    const userResponse = await createUserUseCase.execute({
      name: 'Miranha',
      job: 'Homem-aranha',
    })

    const { user } = userResponse

    expect(user.id).toEqual(expect.any(String))
    expect(user.name).toEqual('Miranha')
  })
})
