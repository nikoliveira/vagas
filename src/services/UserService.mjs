import UserRepository from '../repositories/UserRepository.mjs';

export default class UserService {
  constructor() {
    this.repository = new UserRepository();
  }

  getUserByName(name) {
    return this.repository.getUserByName(name);
  }

  getUsers() {
    return this.repository.getUsers();
  }

  updateUserCount(name) {
    this.repository.updateUserCount(name);
  }

  deleteUser(id) {
    this.repository.deleteUser(id);
  }

  createUser(newUser) {
    return this.repository.createUser(newUser);
  }

  updateUser(id, updatedUser) {
    return this.repository.updateUser(id, updatedUser);
  }
}