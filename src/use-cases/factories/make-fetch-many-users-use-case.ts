import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { FetchManyUsersUseCase } from '@/use-cases/users/fetch-many-users'

export function makeFetchManyUsersUseCase() {
  const inMemoryUsersRepository = new InMemoryUsersRepository()
  const fetchManyUsersUseCase = new FetchManyUsersUseCase(
    inMemoryUsersRepository,
  )

  return fetchManyUsersUseCase
}
