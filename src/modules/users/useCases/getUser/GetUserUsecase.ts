import User from "../../model/users";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  id: number;
}

class GetUserUsecase {
  constructor(private userRepository: IUsersRepository ){}

  execute({ id }: IRequest ): User {
    const user = this.userRepository.getUserById(id);
    if (!user) {
      throw new Error("User does not exist");
    }
    return user;
  }
}

export { GetUserUsecase }