import { UserProps } from '@/@types/user'
import { UsersRepository } from '@/repositories/users-repository'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'

interface EditUserUseCaseRequest {
  name: string
  job: string
  id: string
}

interface EditUserUseCaseResponse {
  user: UserProps
}

export class EditUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    name,
    job,
    id,
  }: EditUserUseCaseRequest): Promise<EditUserUseCaseResponse> {
    const verifyUser = await this.usersRepository.findById(id)

    if (!verifyUser) {
      throw new ResourceNotFoundError()
    }

    const user = await this.usersRepository.edit({ name, job })

    return { user }
  }
}
