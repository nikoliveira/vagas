import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { IncrementUserViews } from '@/use-cases/users/increment-user-view'

export function makeIncrementUserViewUseCase() {
  const inMemoryUsersRepository = new InMemoryUsersRepository()
  const incrementUserViewUseCase = new IncrementUserViews(
    inMemoryUsersRepository,
  )

  return incrementUserViewUseCase
}
