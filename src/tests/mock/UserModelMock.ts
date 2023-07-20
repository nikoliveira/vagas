import getCallUser from './getCallUser';
import newUser from './newUser';

class MockUserModel {
  setUser() {
    return newUser[0];
  }

  getUser() {
    return newUser[0];
  }

  getUsers() {
    return newUser;
  }

  getCallUser() {
    return getCallUser;
  }

  deleteUser() {
    return 'ok';
  }

  updateUser() {
    return {
      ...newUser,
      name: 'Alan',
      job: 'I.T.',
    };
  }

  generateToken() {
    return 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
  }
}

export default MockUserModel;
