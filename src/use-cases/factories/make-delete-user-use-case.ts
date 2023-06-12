import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { DeleteUser } from '@/use-cases/users/delete-user'

export function makeDeleteUserUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const deleteUserUseCase = new DeleteUser(prismaUsersRepository)

  return deleteUserUseCase
}
