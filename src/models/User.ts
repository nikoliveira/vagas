import User from '../classes/User';
import data from '../data/fakeData';
import JwtMethods from '../helper/jwt';
import type UserI from '../interfaces/IUser';

/**
 * Class UserModel, connected with fakeDb to talk with it.
 */
class UserModel {
  protected data: UserI[];
  protected auth: JwtMethods;

  constructor() {
    this.data = data;
    this.auth = new JwtMethods();
  }

  getUser(name: string): string | UserI {
    const findName = this.data.find((user: UserI) => user.name === name);

    if (!findName) {
      return 'User not found';
    }

    const removeOldObject = this.data.filter(item => item.name !== name);

    findName.called += 1;

    removeOldObject.push(findName);

    return findName;
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

  // Teste 5
  getCallUser(name: string) {
    const getUser = this.getUser(name);

    if (typeof getUser === 'string') {
      return getUser;
    }

    return {
      id: getUser.id,
      name: getUser.name,
      visitors: getUser.called,
    };
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

  generateToken(username: string) {
    const findUser = this.data.find((user: UserI) => user.name === username);

    if (!findUser) {
      return 'Inválid user';
    }

    const token = this.auth.jwtSign({
      name: findUser.name,
      role: findUser.role,
    });

    return token;
  }
}

export default UserModel;
