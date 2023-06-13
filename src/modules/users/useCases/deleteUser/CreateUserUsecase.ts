import User from "../../model/users";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  id: number;
}

class DeleteUserUsecase {
  constructor(private userRepository: IUsersRepository ){}

  execute({ id }: IRequest): void {
    const user = this.userRepository.getUserById(id);
    if (!user) {
      throw new Error("User does not exist");
    }

    this.userRepository.deleteUser(id);
  }
}

export { DeleteUserUsecase }