import { UsersRepository } from '@/repositories/users-repository'

import { UserNotExistsError } from '../errors/user-not-exists'
import { User } from '@prisma/client'

interface EditUserUseCaseRequest {
  name: string
  job: string
  id: string
  email: string
}

interface EditUserUseCaseResponse {
  user: User
}

export class EditUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    name,
    job,
    id,
    email,
  }: EditUserUseCaseRequest): Promise<EditUserUseCaseResponse> {
    const userNotExists = await this.usersRepository.findById(id)

    if (!userNotExists) {
      throw new UserNotExistsError()
    }

    const user = await this.usersRepository.edit({
      name,
      email,
      job,
      id,
    })

    return {
      user,
    }
  }
}
