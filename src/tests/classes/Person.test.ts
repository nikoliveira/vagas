import TestPerson from '../mock/PersonMock';

describe('Tests abstract class Person', () => {
  let person: TestPerson;

  beforeEach(() => {
    person = new TestPerson('Andres', 'Staff manager');
  });

  describe('Tests Person attributes', () => {
    test('Tests if person have all propeties', () => {
      expect(person.getName()).toBeDefined();
      expect(person.getCalled()).toBeDefined();
      expect(person.getId()).toBeDefined();
      expect(person.getJob()).toBeDefined();
      expect(person.getRole()).toBeDefined();
    });

    test('Tests if method count call adds one more call for each', () => {
      expect(person.getCalled()).toBe(0);

      person.countCall();
      expect(person.getCalled()).toBe(1);
    });

    test('Tests if method setName changes username', () => {
      expect(person.getName()).toBe('Andres');

      person.setName('Arthur');
      expect(person.getName()).toBe('Arthur');
    });

    test('Tests if method setId chages user id', () => {
      expect(person.getId()).toStrictEqual(expect.any(Number));

      person.setId(123);
      expect(person.getId()).toBe(123);
    });

    test('Tests if method setId chages user id', () => {
      expect(person.getJob()).toStrictEqual('Staff manager');

      person.setJob('Tech Leader');
      expect(person.getJob()).toBe('Tech Leader');
    });
  });
});
