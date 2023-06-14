import fakeData from "../../../fakeData";
import { UserBuilder } from "../model/userBuilder";
import UserResponse from "../model/userResponse";
import User from "../model/users";
import { ICreateUserDTO, IUsersRepository } from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: UserResponse[];

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
    return this.users.map(user => UserBuilder.build(user));
  }

  getUserById(id: number): User | undefined {
    const user = this.users.find(user => user.id === id)
    if (!user) {
      return user;
    }
    user.count++;
    return UserBuilder.build(user);
  }

  createUser({ name, job }: ICreateUserDTO): User {
    const autoimplementOrUUIDFromDatabase = this.users.length + 1;
    const user = new UserResponse(autoimplementOrUUIDFromDatabase, name, job);
    this.users.push(user)
    return UserBuilder.build(user);
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
    return UserBuilder.build(user);
  }

  access(id: number): string {
    const user = this.users.find(user => user.id === id)
    return `O user foi lido ${user?.count} vezes`;
  }

}

export { UsersRepository }