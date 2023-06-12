import { describe, it, expect, beforeEach } from 'vitest'

import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { EditUser } from './edit-user'

let usersRepository: InMemoryUsersRepository
let editUserUseCase: EditUser

describe('Edit User Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    editUserUseCase = new EditUser(usersRepository)
  })

  it('should be able to edit a user', async () => {
    const createUser = await usersRepository.create({
      name: 'Miranha',
      job: 'Homem-aranha',
    })

    const userResponse = await editUserUseCase.execute({
      name: 'Batman',
      job: 'Rico',
      id: createUser.id!,
    })

    const { user } = userResponse

    expect(user.name).toEqual('Batman')
    expect(user.job).toEqual('Rico')
  })
})
