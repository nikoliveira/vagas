import { PaginatedProps } from '@/@types/paginated'
import { UserPropsResponse, InitialUserProps } from '@/@types/user'

export interface UsersPaginated extends PaginatedProps {
  users: UserPropsResponse[]
}

export interface UsersRepository {
  findById(id: string): Promise<UserPropsResponse | null>
  findByName(name: string): Promise<UserPropsResponse | null>
  findManyByPaginated(page: number): Promise<UsersPaginated | null>
  create(data: InitialUserProps): Promise<UserPropsResponse>
  edit(data: UserPropsResponse): Promise<UserPropsResponse>
  delete(id: string): Promise<{ message: string }>
  incrementUserViews(id: string): Promise<{ views: number } | null>
  findByEmail(email: string): Promise<UserPropsResponse | null>
}
