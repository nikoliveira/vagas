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
}

export default UserModel;
