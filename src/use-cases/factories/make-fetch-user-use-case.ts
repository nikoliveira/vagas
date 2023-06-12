import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { FetchUserByName } from '@/use-cases/users/fetch-user-by-name'

export function makeFetchUserUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const fetchUserUseCase = new FetchUserByName(prismaUsersRepository)

  return fetchUserUseCase
}
