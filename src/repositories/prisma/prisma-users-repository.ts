import { UsersPaginated, UsersRepository } from '../users-repository'
import { prisma } from '@/lib/prisma'
import { Prisma, User } from '@prisma/client'

export class PrismaUsersRepository implements UsersRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }

  async incrementUserViews(id: string): Promise<{ views: number } | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    })

    if (user?.views) {
      const countViews = user.views
      const incrementVies = countViews + 1

      await prisma.user.update({
        where: { id },
        data: {
          views: incrementVies,
        },
      })

      return { views: incrementVies }
    }

    return { views: 1 }
  }

  async delete(id: string): Promise<{ message: string }> {
    await prisma.user.delete({
      where: { id },
    })

    return { message: 'successfully deleted user' }
  }

  async findManyByPaginated(page: number): Promise<UsersPaginated | null> {
    const users = await prisma.user.findMany({
      take: 20,
      skip: (page - 1) * 20,
    })

    const totalUsers = await prisma.user.count()

    return {
      users,
      currentPage: page,
      totalItems: totalUsers,
      totalPages: Math.ceil(totalUsers / 20),
    }
  }

  async edit(data: Prisma.UserUncheckedUpdateInput): Promise<User> {
    const user = await prisma.user.update({
      where: { id: data.id as string },
      data,
    })

    return user
  }

  async findByName(name: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        name,
      },
    })

    return user
  }

  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    return user
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user = prisma.user.create({
      data,
    })

    return user
  }
}
