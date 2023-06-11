import { UserProps } from '@/@types/user'
import { UsersRepository } from '@/repositories/users-repository'
import { UserAlreadyExistsError } from '../errors/user-already-exists'

interface CreateUserUseCaseRequest {
  name: string
  job: string
}

interface CreateUserUseCaseResponse {
  user: UserProps
}

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    name,
    job,
  }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const verifyUser = await this.usersRepository.findByName(name)

    if (verifyUser?.job.includes(job) && verifyUser.name.includes(name)) {
      throw new UserAlreadyExistsError()
    }

    const user = await this.usersRepository.create({ name, job })

    return { user }
  }
}
