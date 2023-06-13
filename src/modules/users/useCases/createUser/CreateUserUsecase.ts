import User from "../../model/users";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  job: string;
}

class CreateUserUsecase {
  constructor(private userRepository: IUsersRepository ){}

  execute({ name, job }: IRequest): User {
    const user = this.userRepository.createUser({ name, job });
    return user;
  }
}

export { CreateUserUsecase }