import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { EditUser } from '@/use-cases/users/edit-user'

export function makeEditUserUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const editUserUseCase = new EditUser(prismaUsersRepository)

  return editUserUseCase
}
