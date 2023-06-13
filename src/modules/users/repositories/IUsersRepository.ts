import { User } from "../entities/User";
import { IUpdateUserDTO } from "../useCases/UpdateUser/UpdateUserDTO";


export interface IUsersRepository {
    findByEmail(email: string): User;
    findById(id: string): User;
    findAllUsers(): User[];
    save(user: User): void;
    delete(id: string): User;
    update(user: IUpdateUserDTO): User;
}