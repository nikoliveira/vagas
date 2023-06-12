import { FastifyRequest, FastifyReply } from 'fastify'

import { z } from 'zod'
import { UserNotExistsError } from '@/use-cases/errors/user-not-exists'
import { makeFetchManyUsersUseCase } from '@/use-cases/factories/make-fetch-many-users-use-case'
import { User } from '@prisma/client'

export async function fetchManyUsers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const fetchManyUsersSchema = z.object({
    page: z.string(),
  })

  const { page } = fetchManyUsersSchema.parse(request.query)

  try {
    const fetchUserUseCase = makeFetchManyUsersUseCase()

    const { currentPage, totalItems, totalPages, users } =
      await fetchUserUseCase.execute({
        page: Number(page),
      })

    const userCleanPassword = users.map((user: User) => {
      const format = {
        ...user,
        password_hash: undefined,
      }

      return format
    })

    return reply
      .status(200)
      .send({ users: userCleanPassword, currentPage, totalItems, totalPages })
  } catch (err) {
    if (err instanceof UserNotExistsError) {
      return reply.status(404).send({ message: err.message })
    }

    throw err
  }
}
