import User from '../domain/User.mjs';

export default class UserRepository {
  constructor() {
    this.users = [
      new User(
        "3bcf0afa-8ecf-94af-b4e6-df4064cbfc59",
        "João Oliveira",
        "Desenvolvedor",
        "ADMIN",
        0
      )
    ];
  }
  createUser(newUser) {
    const user = new User(
      newUser.id,
      newUser.name,
      newUser.job,
      newUser.role,
      newUser.count
    );
    this.users.push(user);
    return user;
  }

  updateUser(id, updatedUser) {
    const user = this.users.find((user) => user.id === id);
    if (user) {
      user.name = updatedUser.name;
      user.job = updatedUser.job;
      return user;
    }
    return null;
  }
  getUsers() {
    return this.users;
  }

  getUserByName(name) {
    return this.users.find((user) => user.name === name);
  }

  updateUserCount(name) {
    const user = this.getUserByName(name);
    if (user) {
      user.count++;
    }
  }

  deleteUser(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}