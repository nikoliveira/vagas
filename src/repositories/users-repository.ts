import { PaginatedProps } from '@/@types/paginated'
import { UserProps } from '@/@types/user'

export interface UsersPaginated extends PaginatedProps {
  users: UserProps[]
}

export interface UsersRepository {
  findById(id: string): Promise<UserProps | null>
  findByName(name: string): Promise<UserProps | null>
  findManyByPaginated(page: number): Promise<UsersPaginated | null>
  create(data: UserProps): Promise<UserProps>
  edit(data: UserProps): Promise<UserProps>
  delete(id: string): Promise<{ message: string }>
  incrementUserViews(id: string): Promise<{ views: number } | null>
}
