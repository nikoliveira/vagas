import { User } from "../entities/User";
import { IUpdateUserDTO } from "../useCases/UpdateUser/UpdateUserDTO";

export class UsersRepository {
    private users: User[];
    private static INSTANCE: UsersRepository;

    private constructor(){
        this.users =[];
    }

    public static getInstance(): UsersRepository {
        if(!UsersRepository.INSTANCE){
            UsersRepository.INSTANCE = new UsersRepository();
        }
        return UsersRepository.INSTANCE;
    }

    findByEmail(email: string): User {
        const user = this.users.find(user => user.email === email);
        
        return user;
    }

    findById(id: string): User {
        const user = this.users.find(user => user.id === id);
        return user;
    }

    findAllUsers(): User[] {
        return this.users;
    }

    save(user: User): void {
        this.users.push(user);
    }

    delete(id: string): User {
        const indexUser = this.users.findIndex(user => user.id === id);
        const user = this.findById(id); 

        this.users.splice(indexUser, 1); 

        return user;
    }

    update(user: IUpdateUserDTO): User {
        const findUser = this.findById(user.id);

        findUser.name = user.name;
        findUser.job = user.job
        findUser.password = user.password;

        return findUser;
    }
}