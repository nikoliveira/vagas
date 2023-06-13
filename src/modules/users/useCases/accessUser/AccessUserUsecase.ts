import { IUsersRepository } from "../../repositories/IUsersRepository";

class AccessUserUsecase {
  constructor(private userRepository: IUsersRepository ){}

  execute(): string {
    return this.userRepository.access();
  }
}

export { AccessUserUsecase }