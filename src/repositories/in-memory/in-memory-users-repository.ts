import { UserProps } from '@/@types/user'
import { UsersPaginated, UsersRepository } from '../users-repository'
import { randomUUID } from 'node:crypto'
import { fakeData } from '@/utils/fakeData'

export class InMemoryUsersRepository implements UsersRepository {
  public items: UserProps[] = fakeData

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

  async edit(data: UserProps): Promise<UserProps> {
    const user = this.items.find((user) => user.id === data.id) as UserProps

    const index = this.items.findIndex((user) => user.id === data.id)

    const userEdit = {
      ...user,
      name: data.name,
      job: data.job,
      updated_at: new Date(),
    }

    if (index !== -1) {
      this.items.splice(index, 1, userEdit)
    }

    return userEdit
  }

  async findByName(name: string): Promise<UserProps | null> {
    const user = this.items.find((item) => item.name.includes(name))

    if (!user) {
      return null
    }

    return user
  }

  async findById(id: string): Promise<UserProps | null> {
    const user = this.items.find((item) => item.id === id)

    if (!user) {
      return null
    }

    return user
  }

  async create(data: UserProps): Promise<UserProps> {
    const user = {
      id: randomUUID(),
      name: data.name,
      job: data.job,
      created_at: new Date(),
    }

    this.items.push(user)

    return user
  }
}
