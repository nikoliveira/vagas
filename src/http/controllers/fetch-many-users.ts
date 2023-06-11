import { FastifyRequest, FastifyReply } from 'fastify'

import { z } from 'zod'
import { UserNotExistsError } from '@/use-cases/errors/user-not-exists'
import { makeFetchManyUsersUseCase } from '@/use-cases/factories/make-fetch-many-users-use-case'

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

    const users = await fetchUserUseCase.execute({
      page: Number(page),
    })

    return reply.status(200).send(users)
  } catch (err) {
    if (err instanceof UserNotExistsError) {
      return reply.status(404).send({ message: err.message })
    }

    throw err
  }
}
