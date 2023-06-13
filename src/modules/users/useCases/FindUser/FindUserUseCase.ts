import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

let count = 0;

export class FindUserUseCase {
    constructor (private usersRepository: IUsersRepository){}

    execute(email: string): User {
        
        const findUser = this.usersRepository.findByEmail(email);

        if (!findUser) {
            throw new Error ("User is not found");
        }

        count++

        const newUser = {
            ...findUser,
            countUserReadByRequest: count
        }
        
        return newUser;
    }
}