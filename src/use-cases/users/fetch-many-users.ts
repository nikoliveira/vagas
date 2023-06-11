import {
  UsersPaginated,
  UsersRepository,
} from '@/repositories/users-repository'

import { ResourceNotFoundError } from '../errors/resource-not-found-error'

interface FetchManyUsersUseCaseRequest {
  page: number
}

interface FetchManyUsersUseCaseResponse extends UsersPaginated {}

export class FetchManyUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    page,
  }: FetchManyUsersUseCaseRequest): Promise<FetchManyUsersUseCaseResponse> {
    const user = await this.usersRepository.findManyByPaginated(page)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    return user
  }
}
