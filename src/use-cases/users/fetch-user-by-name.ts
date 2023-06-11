import { UserProps } from '@/@types/user'
import { UsersRepository } from '@/repositories/users-repository'

import { UserNotExistsError } from '../errors/user-not-exists'

interface FetchUserUseCaseRequest {
  name: string
}

interface FetchUserUseCaseResponse {
  user: UserProps
}

export class FetchUserByName {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    name,
  }: FetchUserUseCaseRequest): Promise<FetchUserUseCaseResponse> {
    const user = await this.usersRepository.findByName(name)

    if (!user) {
      throw new UserNotExistsError()
    }

    return {
      user,
    }
  }
}
