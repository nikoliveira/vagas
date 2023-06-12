import { describe, it, expect, beforeEach } from 'vitest'

import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { CreateUserUseCase } from './create-user'

let usersRepository: InMemoryUsersRepository
let createUserUseCase: CreateUserUseCase

describe('Create User Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    createUserUseCase = new CreateUserUseCase(usersRepository)
  })

  it('should be able to create a new user', async () => {
    const userResponse = await createUserUseCase.execute({
      name: 'Miranha',
      job: 'Homem-aranha',
      role: 'ADMIN',
      password: '123abc',
      email: 'homemaranha@marvel.com',
    })

    const { user } = userResponse

    expect(user.id).toEqual(expect.any(String))
    expect(user.name).toEqual('Miranha')
    expect(user.role).toEqual('ADMIN')
  })
})
