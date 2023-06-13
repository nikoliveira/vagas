import fakeData from "../../../fakeData";
import User from "../model/users";
import { ICreateUserDTO, IUsersRepository } from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = fakeData;
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository;
    }
    return UsersRepository.INSTANCE;
  }
  
  getAll(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    const user = this.users.find(user => user.id === id)
    return user;
  }

  createUser({ name, job }: ICreateUserDTO): User {
    const id = this.users.length + 1;
    const user = new User(id, name, job);
    this.users.push(user)
    return user;
  }

  deleteUser(id: number): void {
    const index = this.users.findIndex(user => user.id === id);
    if (index > -1) this.users.splice(index, 1);
  }

  updateUser({ name, job, id }: User): User | undefined {
    const index = this.users.findIndex(user => user.id === id);
    const user = this.users[index] = {
      ...this.users[index],
      name,
      job
    }
    return user;
  }

}

export { UsersRepository }