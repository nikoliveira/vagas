import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { FetchUserByName } from '@/use-cases/users/fetch-user-by-name'

export function makeFetchUserUseCase() {
  const inMemoryUsersRepository = new InMemoryUsersRepository()
  const fetchUserUseCase = new FetchUserByName(inMemoryUsersRepository)

  return fetchUserUseCase
}
