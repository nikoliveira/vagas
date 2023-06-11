import { FastifyRequest, FastifyReply } from 'fastify'
import { makeCreateUserUseCase } from '@/use-cases/factories/make-create-user-use-case'

import { z } from 'zod'
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists'

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
  const createSchema = z.object({
    name: z.string(),
    job: z.string(),
  })

  const { name, job } = createSchema.parse(request.body)

  try {
    const createUserUseCase = makeCreateUserUseCase()

    const { user } = await createUserUseCase.execute({
      name,
      job,
    })

    return reply.status(201).send({ user })
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    throw err
  }
}
