import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { IncrementUserViews } from '@/use-cases/users/increment-user-view'

export function makeIncrementUserViewUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const incrementUserViewUseCase = new IncrementUserViews(prismaUsersRepository)

  return incrementUserViewUseCase
}
