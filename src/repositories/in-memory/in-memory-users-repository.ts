import { UsersPaginated, UsersRepository } from '../users-repository'
import { randomUUID } from 'node:crypto'

import { Prisma, Role, User } from '@prisma/client'

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = []

  async findByEmail(email: string): Promise<User | null> {
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

  async edit(data: Prisma.UserUncheckedUpdateInput): Promise<User> {
    const user = this.items.find((user) => user.id === data.id) as User

    const index = this.items.findIndex((user) => user.id === data.id)

    const userEdit = {
      ...user,
      name: data.name as string,
      email: data.email as string,
      role: data.role as Role,
      job: data.job as string,
    }

    if (index !== -1) {
      this.items.splice(index, 1, userEdit)
    }

    return userEdit
  }

  async findByName(name: string): Promise<User | null> {
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

  async findById(id: string): Promise<User | null> {
    const user = this.items.find((item) => item.id === id)

    if (!user) {
      return null
    }

    return user
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user = {
      id: randomUUID(),
      name: data.name,
      job: data.job,
      created_at: new Date(),
      role: Role.USER,
      password_hash: data.password_hash,
      email: data.email,
      updated_at: new Date(),
      views: 0,
    }

    this.items.push(user)

    return user
  }
}
