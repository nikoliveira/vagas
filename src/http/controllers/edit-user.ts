import { FastifyRequest, FastifyReply } from 'fastify'
import { makeEditUserUseCase } from '@/use-cases/factories/make-edit-user-use-case'

import { z } from 'zod'

import { UserNotExistsError } from '@/use-cases/errors/user-not-exists'

export async function editUser(request: FastifyRequest, reply: FastifyReply) {
  const editSchema = z.object({
    name: z.string(),
    job: z.string(),
    email: z.string().email(),
    id: z.string(),
  })

  const { name, job, id, email } = editSchema.parse(request.body)

  try {
    const editUserUseCase = makeEditUserUseCase()

    const { user } = await editUserUseCase.execute({
      name,
      job,
      id,
      email,
    })

    return reply.status(200).send({ user })
  } catch (err) {
    if (err instanceof UserNotExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    throw err
  }
}
