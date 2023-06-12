import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { FetchManyUsersUseCase } from '@/use-cases/users/fetch-many-users'

export function makeFetchManyUsersUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const fetchManyUsersUseCase = new FetchManyUsersUseCase(prismaUsersRepository)

  return fetchManyUsersUseCase
}
