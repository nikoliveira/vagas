import { describe, it, expect, beforeEach } from 'vitest'

import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { IncrementUserViews } from './increment-user-view'

let usersRepository: InMemoryUsersRepository
let incrementUserUseCase: IncrementUserViews

describe('Increment User View Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    incrementUserUseCase = new IncrementUserViews(usersRepository)
  })

  it('should be able to increment the user views value', async () => {
    const { id } = await usersRepository.create({
      name: 'Miranha',
      job: 'Homem-aranha',
    })

    for (let i = 1; i <= 9; i++) {
      await incrementUserUseCase.execute({ id: id! })
    }

    const viewsIncrement = await incrementUserUseCase.execute({ id: id! })

    const { views } = viewsIncrement

    expect(views).toEqual(10)
  })
})
