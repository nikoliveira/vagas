import { UserProps } from '@/@types/user'
import { UsersRepository } from '@/repositories/users-repository'

import { UserNotExistsError } from '../errors/user-not-exists'

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
    const user = await this.usersRepository.findById(id)

    if (!user) {
      throw new UserNotExistsError()
    }

    const updatedUser = await this.usersRepository.edit({ name, job, id })

    return { user: updatedUser }
  }
}
