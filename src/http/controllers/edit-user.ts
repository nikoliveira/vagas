import { FastifyRequest, FastifyReply } from 'fastify'
import { makeEditUserUseCase } from '@/use-cases/factories/make-edit-user-use-case'

import { z } from 'zod'

import { UserNotExistsError } from '@/use-cases/errors/user-not-exists'

export async function editUser(request: FastifyRequest, reply: FastifyReply) {
  const editQuerySchema = z.object({
    id: z.string(),
  })

  const editBodySchema = z.object({
    name: z.string(),
    job: z.string(),
    email: z.string().email(),
  })

  const { name, job, email } = editBodySchema.parse(request.body)
  const { id } = editQuerySchema.parse(request.query)

  try {
    const editUserUseCase = makeEditUserUseCase()

    const { user } = await editUserUseCase.execute({
      name,
      job,
      id,
      email,
    })

    return reply.status(200).send({ ...user, password_hash: undefined })
  } catch (err) {
    if (err instanceof UserNotExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    throw err
  }
}
