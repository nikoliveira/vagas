import { UserProps } from '@/@types/user'
import { UsersRepository } from '@/repositories/users-repository'

import { UserNotExistsError } from '../errors/user-not-exists'

interface FetchUserUseCaseRequest {
  id: string
}

interface FetchUserUseCaseResponse {
  user: UserProps
}

export class FetchUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    id,
  }: FetchUserUseCaseRequest): Promise<FetchUserUseCaseResponse> {
    const user = await this.usersRepository.findById(id)

    if (!user) {
      throw new UserNotExistsError()
    }

    return {
      user,
    }
  }
}
