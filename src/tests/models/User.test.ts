import UserModel from '../../models/User';
import FakeAuth from '../mock/auth';
import mockData from '../mock/data';
import newUser from '../mock/newUser';

describe('Tests UserModel', () => {
  let model: UserModel;
  let auth: FakeAuth;
  const keys = Object.keys(mockData[0]);

  beforeAll(() => {
    model = new UserModel();
    auth = new FakeAuth();

    (model as any).data = mockData;
    (model as any).auth = auth;
  });

  describe('Tests getUser method flow', () => {
    test('Tests if getUser generate user not found', () => {
      const getUser = model.getUser('Marlene not registered in our system');

      expect(getUser).toBe('User not found');
    });

    test('Tests if getUser finds an user', () => {
      const getUser = model.getUser('Nami');

      keys.forEach((prop: string) => {
        expect(getUser).toHaveProperty(prop);
      });
    });
  });
  describe('Tests getUsers method flow', () => {
    test('Tests if getUsers return all registered users', () => {
      const getUsers = model.getUsers();

      expect(getUsers).toBe(mockData);
    });
  });

  describe('Tests setUser method flow', () => {
    test('Tests if setUser return a new user', () => {
      const setUser = model.setUser(newUser[0]);

      expect(setUser).toStrictEqual({
        ...newUser[0],
        id: expect.any(Number),
        called: expect.any(Number),
      });
    });
  });

  describe('Tests getCallUser method flow', () => {
    test('Tests if getCallUser return an user data count calls', () => {
      const name = 'Gina';
      const getCall = model.getCallUser(name);

      expect(getCall).toStrictEqual({
        name,
        id: expect.any(Number),
        visitors: expect.any(Number),
      });
    });

    test('Tests if user not found', () => {
      const name = 'Algor';
      const getCall = model.getCallUser(name);

      expect(getCall).toBe('User not found');
    });
  });

  describe('Tests deleteUser method flow', () => {
    test('Tests if deleteUser exclude an user', () => {
      const name = 'Malcon';
      const deleteUser = model.deleteUser(name);

      expect(deleteUser).toBe('success');
    });
  });

  describe('Tests updateUser method flow', () => {
    test('Tests if updateUser set new data in an user', () => {
      const name = 'Gina';
      const job = 'Director';
      const updateUser = model.updateUser(String(mockData[2].id), {name, job});

      expect(updateUser).toStrictEqual({...mockData[2], job});
    });

    test('Tests if updateUser returns inválid user if user does not exist', () => {
      const name = 'Congro';
      const job = 'Director';
      const updateUser = model.updateUser('123456', {name, job});

      expect(updateUser).toBe('Inválid user');
    });
  });

  describe('Tests generateToken method flow', () => {
    test('Tests if name is not found', () => {
      const name = 'Congro';
      const generateToken = model.generateToken(name);

      expect(generateToken).toBe('Inválid user');
    });

    test('Tests if generateToken returns a new token', () => {
      const name = 'Nami';
      const generateToken = model.generateToken(name);

      expect(generateToken).toStrictEqual(expect.any(String));
    });
  });
});
