import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository"

export class ListUsersUseCase {
    constructor(private usersRepository: IUsersRepository){}

    execute(): User[] {
        
        const allUsers = this.usersRepository.findAllUsers();
        
        return allUsers;
    }
}