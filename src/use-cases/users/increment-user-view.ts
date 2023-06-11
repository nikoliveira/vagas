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
    const views = await this.usersRepository.incrementUserViews(id)

    if (!views) {
      throw new UserNotExistsError()
    }

    return views
  }
}
