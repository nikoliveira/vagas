import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { AuthenticateUseCase } from '@/use-cases/users/authenticate'

export function makeAuthenticateUseCase() {
  const inMemoryUsersRepository = new InMemoryUsersRepository()
  const authenticateUseCase = new AuthenticateUseCase(inMemoryUsersRepository)

  return authenticateUseCase
}
