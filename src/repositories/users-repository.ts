import { PaginatedProps } from '@/utils/paginated'

import { Prisma, User } from '@prisma/client'

export interface UsersPaginated extends PaginatedProps {
  users: User[]
}

export interface UsersRepository {
  findById(id: string): Promise<User | null>
  findByName(name: string): Promise<User | null>
  findManyByPaginated(page: number): Promise<UsersPaginated | null>
  create(data: Prisma.UserCreateInput): Promise<User>
  edit(data: Prisma.UserUncheckedUpdateInput): Promise<User>
  delete(id: string): Promise<{ message: string }>
  incrementUserViews(id: string): Promise<{ views: number } | null>
  findByEmail(email: string): Promise<User | null>
}
