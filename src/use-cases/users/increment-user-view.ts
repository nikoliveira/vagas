import { UsersRepository } from '@/repositories/users-repository'

import { UserNotExistsError } from '../errors/user-not-exists'

interface IncrementUserViewsUseCaseRequest {
  id: string
}

interface IncrementUserViewsUseCaseResponse {
  views: number
}

export class IncrementUserViews {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    id,
  }: IncrementUserViewsUseCaseRequest): Promise<IncrementUserViewsUseCaseResponse> {
    const verifyUser = await this.usersRepository.findById(id)

    if (!verifyUser) {
      throw new UserNotExistsError()
    }

    const views = await this.usersRepository.incrementUserViews(id)

    return views!
  }
}
