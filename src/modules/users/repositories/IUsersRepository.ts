import User from "../model/users";

interface ICreateUserDTO {
  name: string;
  job: string;  
}

interface IUsersRepository {
  getAll(): User[];
  getUserById(id: number): User | undefined;
  createUser({ name, job }: ICreateUserDTO): User;
  deleteUser(id: number): void;
  updateUser({ name, job, id }: User): User | undefined;
}

export { IUsersRepository, ICreateUserDTO}