import User from '../../classes/User';

const properties = ['id',
  'name',
  'job',
  'role',
  'called'];

describe('Tests UserClass', () => {
  let user: User;

  beforeEach(() => {
    user = new User('Alfredo', 'Designer');
  });

  describe('Tests user properties', () => {
    test('Tests if user generates a new Id', () => {
      expect(user.id).toBeDefined();
      expect(user.id).toStrictEqual(expect.any(Number));
    });

    test('Tests if getUserObject generates an object with all properties', () => {
      const getProperties = user.getUserObj();

      properties.forEach((prop: string) => {
        expect(getProperties).toHaveProperty(prop);
      });
    });
  });
});
