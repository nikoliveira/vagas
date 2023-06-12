import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { FetchUser } from '@/use-cases/users/fetch-user'

export function makeFetchUserUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const fetchUserUseCase = new FetchUser(prismaUsersRepository)

  return fetchUserUseCase
}
