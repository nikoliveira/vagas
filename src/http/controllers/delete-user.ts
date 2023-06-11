import { FastifyRequest, FastifyReply } from 'fastify'
import { makeDeleteUserUseCase } from '@/use-cases/factories/make-delete-user-use-case'

import { z } from 'zod'

import { UserNotExistsError } from '@/use-cases/errors/user-not-exists'

export async function deleteUser(request: FastifyRequest, reply: FastifyReply) {
  const deleteSchema = z.object({
    id: z.string(),
  })

  const { id } = deleteSchema.parse(request.query)

  try {
    const deleteUserUseCase = makeDeleteUserUseCase()

    const { message } = await deleteUserUseCase.execute({
      id,
    })

    return reply.status(200).send({ message })
  } catch (err) {
    if (err instanceof UserNotExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    throw err
  }
}
