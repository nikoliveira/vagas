import { UsersRepository } from '@/repositories/users-repository'
import { InvalidCredentialsError } from '../errors/invalid-credentials-error'
import { compare } from 'bcryptjs'
import { UserPropsResponse } from '@/@types/user'
import { UserNotExistsError } from '../errors/user-not-exists'

interface AuthenticateUseCaseRequest {
  email: string
  password: string
}

interface AuthenticateUseCaseResponse {
  user: UserPropsResponse
}

export class AuthenticateUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new UserNotExistsError()
    }

    const doesPasswordMatches = await compare(password, user.password_hash)

    if (!doesPasswordMatches) {
      throw new InvalidCredentialsError()
    }

    return {
      user,
    }
  }
}
