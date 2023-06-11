import { describe, it, expect, beforeEach } from 'vitest'

import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { DeleteUser } from './delete-user'

let usersRepository: InMemoryUsersRepository
let deleteUserUseCase: DeleteUser

describe('Delete User by ID Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    deleteUserUseCase = new DeleteUser(usersRepository)
  })

  it('should be able to delete a new user', async () => {
    const createUser = await usersRepository.create({
      name: 'Miranha',
      job: 'Homem-aranha',
    })

    const { message } = await deleteUserUseCase.execute({ id: createUser.id })

    expect(message).toEqual(expect.any(String))
  })
})
