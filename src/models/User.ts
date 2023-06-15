import User from '../classes/User';
import data from '../data/fakeData';
import type UserI from '../interfaces/IUser';

/**
 * Class UserModel, connected with fakeDb to talk with it.
 */
class UserModel {
  protected data: UserI[];

  constructor() {
    this.data = data;
  }

  getUser(name: string): string | UserI {
    const findName = this.data.find((user: UserI) => user.name === name);

    return findName ? findName : 'User not found';
  }

  getUsers(): UserI[] {
    return this.data;
  }

  setUser(userData: {name: string; job: string}) {
    const {name, job} = userData;
    const newUser = new User(name, job).getUserObj();

    this.data.push(newUser);

    return newUser;
  }

  deleteUser(name: string) {
    const removedName = this.data.filter(item => item.name !== name);

    this.data = removedName;

    return 'success';
  }

  updateUser(id: string, updateData: {name: string; job: string}) {
    const {name, job} = updateData;

    const findUser = this.data.find(obj => obj.id.toString() === id);

    if (!findUser?.name) {
      return 'Inválid user';
    }

    findUser.name = name;
    findUser.job = job;

    const removeOldObject = this.data.filter(item => item.id.toString() !== id);

    removeOldObject.push(findUser);

    return findUser;
  }
}

export default UserModel;
