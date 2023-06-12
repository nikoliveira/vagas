import { UsersRepository } from '@/repositories/users-repository'
import { UserNotExistsError } from '../errors/user-not-exists'

interface DeleteUserUseCaseRequest {
  id: string
}

interface DeleteUserUseCaseResponse {
  message: string
}

export class DeleteUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    id,
  }: DeleteUserUseCaseRequest): Promise<DeleteUserUseCaseResponse> {
    const user = await this.usersRepository.findById(id)

    if (!user) {
      throw new UserNotExistsError()
    }

    const { message } = await this.usersRepository.delete(id)

    return { message }
  }
}
