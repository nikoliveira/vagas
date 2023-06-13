import User from "../../model/users";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  job: string;
  id: number;
}

class UpdateUserUsecase {
  constructor(private userRepository: IUsersRepository ){}

  execute({ name, job, id }: IRequest): User | undefined {
    let user = this.userRepository.getUserById(id);
    if (!user) {
      throw new Error("User does not exist");
    }

    user = this.userRepository.updateUser({ name, job, id });
    return user;
  }
}

export { UpdateUserUsecase }