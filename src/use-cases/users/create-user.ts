import { UserProps } from '@/@types/user'
import { UsersRepository } from '@/repositories/users-repository'

interface CreateUserUseCaseRequest {
  name: string
  job: string
}

interface CreateUserUseCaseResponse {
  user: UserProps
}

export class CreateUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    name,
    job,
  }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const user = await this.usersRepository.create({ name, job })

    return { user }
  }
}
