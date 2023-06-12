import { UsersRepository } from '@/repositories/users-repository'
import { hash } from 'bcryptjs'
import { User } from '@prisma/client'
import { EmailAlreadyExistsError } from '../errors/email-already-exists'

interface CreateUserUseCaseRequest {
  name: string
  job: string
  password: string
  email: string
  role?: 'USER' | 'ADMIN'
}

interface CreateUserUseCaseResponse {
  user: User
}

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    password,
    name,
    job,
    role,
    email,
  }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const password_hash = await hash(password, 6)
    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new EmailAlreadyExistsError()
    }

    const user = await this.usersRepository.create({
      name,
      job,
      role,
      password_hash,
      email,
    })

    return { user }
  }
}
