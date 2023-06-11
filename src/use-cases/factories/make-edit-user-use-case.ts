import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { EditUser } from '@/use-cases/users/edit-user'

export function makeEditUserUseCase() {
  const inMemoryUsersRepository = new InMemoryUsersRepository()
  const editUserUseCase = new EditUser(inMemoryUsersRepository)

  return editUserUseCase
}
