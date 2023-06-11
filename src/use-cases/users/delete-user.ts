import { UsersRepository } from '@/repositories/users-repository'

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
    const { message } = await this.usersRepository.delete(id)

    return { message }
  }
}
