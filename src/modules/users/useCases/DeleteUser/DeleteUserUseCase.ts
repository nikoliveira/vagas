import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class DeleteUserUseCase {
    constructor(private usersRepository: IUsersRepository){}

    execute(id: string) {
        const findUser = this.usersRepository.findById(id);

        if(!findUser) {
            throw new Error ('User is not found');
        }
        return this.usersRepository.delete(id);
    }
}