import User from "../../model/users";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class GetAllUsersUsecase {
  constructor(private userRepository: IUsersRepository ){}

  execute(): User[] {
    return this.userRepository.getAll();
  }
}

export { GetAllUsersUsecase }