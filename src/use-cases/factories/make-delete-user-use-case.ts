import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { DeleteUser } from '@/use-cases/users/delete-user'

export function makeDeleteUserUseCase() {
  const inMemoryUsersRepository = new InMemoryUsersRepository()
  const deleteUserUseCase = new DeleteUser(inMemoryUsersRepository)

  return deleteUserUseCase
}
