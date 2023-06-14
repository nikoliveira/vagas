import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  id: number;
}

class AccessUserUsecase {
  constructor(private userRepository: IUsersRepository ){}

  execute({ id }: IRequest): string {
    return this.userRepository.access(id);
  }
}

export { AccessUserUsecase }