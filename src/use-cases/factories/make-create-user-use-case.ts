import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { CreateUserUseCase } from '@/use-cases/users/create-user'

export function makeCreateUserUseCase() {
  const inMemoryUsersRepository = new InMemoryUsersRepository()
  const createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository)

  return createUserUseCase
}
