import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUpdateUserDTO } from "./UpdateUserDTO";

export class UpdateUserUseCase {
    constructor (private usersRepository: IUsersRepository){}

    execute(data: IUpdateUserDTO) {
        const findUser = this.usersRepository.findById(data.id);

        if(!findUser) {
            throw new Error ('User is not found');
        }

        return this.usersRepository.update(data);
    }
}