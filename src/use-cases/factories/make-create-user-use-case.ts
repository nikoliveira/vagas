import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { CreateUserUseCase } from '@/use-cases/users/create-user'

export function makeCreateUserUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const createUserUseCase = new CreateUserUseCase(prismaUsersRepository)

  return createUserUseCase
}
