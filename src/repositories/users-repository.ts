import { PaginatedProps } from '@/@types/paginated'
import { UserProps, CreateUserProps } from '@/@types/user'

export interface UsersPaginated extends PaginatedProps {
  users: UserProps[]
}

export interface UsersRepository {
  findById(id: string): Promise<UserProps | null>
  findByName(name: string): Promise<UserProps | null>
  findManyByPaginated(page: number): Promise<UsersPaginated | null>
  create(data: CreateUserProps): Promise<UserProps>
  edit(data: CreateUserProps): Promise<UserProps>
  delete(id: string): Promise<{ message: string }>
}
