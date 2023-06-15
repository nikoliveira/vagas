import data from '../data/fakeData';
import type UserI from '../interfaces/IUser';

class UserModel {
  protected data: UserI[];

  constructor() {
    this.data = data;
  }

  getUser(name: string): string | UserI {
    const findName = this.data.find((user: UserI) => user.name === name);

    return findName ? findName : 'User not found';
  }
}

export default UserModel;
