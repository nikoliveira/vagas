import { InitialUserProps, UserPropsResponse } from '@/@types/user'
import { UsersPaginated, UsersRepository } from '../users-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryUsersRepository implements UsersRepository {
  public items: UserPropsResponse[] = []

  async findByEmail(email: string): Promise<UserPropsResponse | null> {
    const user = this.items.find((item) => item.email === email)

    if (!user) {
      return null
    }

    return user
  }

  async incrementUserViews(id: string): Promise<{ views: number } | null> {
    const user = this.items.find((item) => item.id === id)

    if (!user) {
      return null
    }

    user.views = user.views ? user.views + 1 : 1

    return { views: user.views }
  }

  async delete(id: string): Promise<{ message: string }> {
    const index = this.items.findIndex((user) => user.id === id)

    if (index !== -1) {
      this.items.splice(index, 1)
    }

    return { message: 'successfully deleted user' }
  }

  async findManyByPaginated(page: number): Promise<UsersPaginated | null> {
    const users = this.items.slice((page - 1) * 20, page * 20)

    if (!users) {
      return null
    }

    return {
      users,
      currentPage: page,
      totalItems: this.items.length,
      totalPages: Math.ceil(this.items.length / 20),
    }
  }

  async edit(data: UserPropsResponse): Promise<UserPropsResponse> {
    const user = this.items.find((user) => user.id === data.id)

    const index = this.items.findIndex((user) => user.id === data.id)

    const userEdit = {
      ...user,
      name: data.name,
      job: data.job,
      updated_at: new Date(),
      role: data.role,
      email: data.email,
      password_hash: data.password_hash,
      views: data.views,
      id: data.id,
    }

    if (index !== -1) {
      this.items.splice(index, 1, userEdit)
    }

    return userEdit
  }

  async findByName(name: string): Promise<UserPropsResponse | null> {
    const user = this.items.find((item) =>
      item.name
        .normalize('NFD')
        .replace(/[^a-zA-Z\s]/g, '')
        .toLocaleLowerCase()

        .includes(
          name
            .normalize('NFD')
            .replace(/[^a-zA-Z\s]/g, '')
            .toLowerCase(),
        ),
    )

    if (!user) {
      return null
    }

    return user
  }

  async findById(id: string): Promise<UserPropsResponse | null> {
    const user = this.items.find((item) => item.id === id)

    if (!user) {
      return null
    }

    return user
  }

  async create(data: InitialUserProps): Promise<UserPropsResponse> {
    const user = {
      id: randomUUID(),
      name: data.name,
      job: data.job,
      created_at: new Date(),
      role: data.role,
      password_hash: data.password_hash,
      email: data.email,
      views: 0,
    }

    this.items.push(user)

    return user
  }
}
