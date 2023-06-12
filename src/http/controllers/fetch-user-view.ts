import { FastifyRequest, FastifyReply } from 'fastify'
import { makeFetchUserUseCase } from '@/use-cases/factories/make-fetch-user-use-case'

import { z } from 'zod'

import { UserNotExistsError } from '@/use-cases/errors/user-not-exists'

export async function fetchUserViews(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const fetchUserSchema = z.object({
    id: z.string(),
  })

  const { id } = fetchUserSchema.parse(request.query)

  try {
    const fetchUserUseCase = makeFetchUserUseCase()

    const { user } = await fetchUserUseCase.execute({
      id,
    })

    return reply.status(200).send({
      message: `Usuário ${user.name}, foi lido ${user.views || 0} vezes.`,
    })
  } catch (err) {
    if (err instanceof UserNotExistsError) {
      return reply.status(404).send({ message: err.message })
    }

    throw err
  }
}
