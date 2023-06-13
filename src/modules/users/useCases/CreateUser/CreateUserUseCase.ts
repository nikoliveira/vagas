import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) { }

    execute(data: ICreateUserRequestDTO): void {
        const usersAlreadyExists = this.usersRepository.findByEmail(data.email);
        
        if (usersAlreadyExists) {
            throw new Error("User Already Exists");
        }

        const user = new User(data);
        
        return this.usersRepository.save(user);
    }
}