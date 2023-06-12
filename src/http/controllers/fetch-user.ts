import { FastifyRequest, FastifyReply } from 'fastify'
import { makeFetchUserUseCase } from '@/use-cases/factories/make-fetch-user-use-case'

import { z } from 'zod'

import { makeIncrementUserViewUseCase } from '@/use-cases/factories/make-increment-user-view-use-case'

import { UserNotExistsError } from '@/use-cases/errors/user-not-exists'

export async function fetchUser(request: FastifyRequest, reply: FastifyReply) {
  const fetchUserSchema = z.object({
    id: z.string(),
  })

  const { id } = fetchUserSchema.parse(request.query)

  try {
    const fetchUserUseCase = makeFetchUserUseCase()
    const incrementUserView = makeIncrementUserViewUseCase()

    const { user } = await fetchUserUseCase.execute({
      id,
    })

    await incrementUserView.execute({ id: user.id! })

    return reply.status(200).send({ ...user, password_hash: undefined })
  } catch (err) {
    if (err instanceof UserNotExistsError) {
      return reply.status(404).send({ message: err.message })
    }

    throw err
  }
}
