import { FastifyRequest, FastifyReply } from 'fastify'
import { makeCreateUserUseCase } from '@/use-cases/factories/make-create-user-use-case'

import { z } from 'zod'
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists'

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
  const Roles = z.enum(['ADMIN', 'USER'])
  const createSchema = z.object({
    name: z.string(),
    job: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    role: z.optional(Roles),
  })

  const { name, job, email, password, role } = createSchema.parse(request.body)

  try {
    const createUserUseCase = makeCreateUserUseCase()

    const { user } = await createUserUseCase.execute({
      name,
      job,
      email,
      password,
      role,
    })

    return reply.status(201).send({ user })
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    throw err
  }
}