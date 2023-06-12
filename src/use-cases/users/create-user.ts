import { UsersRepository } from '@/repositories/users-repository'
import { UserAlreadyExistsError } from '../errors/user-already-exists'
import { hash } from 'bcryptjs'
import { User } from '@prisma/client'

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
    const verifyUser = await this.usersRepository.findByName(name)

    if (verifyUser?.job.includes(job) && verifyUser.name.includes(name)) {
      throw new UserAlreadyExistsError()
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
