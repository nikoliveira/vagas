import JwtMethods from '../helper/jwt';
import * as jwt from 'jsonwebtoken';

jest.mock('jsonwebtoken');
const mockedJwt = jwt as jest.Mocked<typeof jwt>;

describe('Testing Jwt methods', () => {
  let jwtMethods: JwtMethods;
  const tokenFalso = 'tokenFalso';

  beforeEach(() => {
    process.env.JWT_SECRET = 'secretfortests';
    jwtMethods = new JwtMethods();
  });

  afterEach(() => {
    delete process.env.JWT_SECRET;
  });

  describe('Testa o método verify token', () => {
    afterEach(() => {
      mockedJwt.verify.mockReset();
    });

    test('Testa se retorna corretamente o objeto', () => {
      mockedJwt.verify.mockImplementationOnce(() => ({role: 'adm'}));

      const verify = JwtMethods.verifyToken(tokenFalso);

      expect(verify).toStrictEqual({role: 'adm'});
    });
  });

  describe('Testa o método decodeToken', () => {
    afterEach(() => {
      mockedJwt.decode.mockReset();
    });

    test('Testa o retorno correto do método decode', () => {
      mockedJwt.decode.mockReturnValueOnce({role: 'adm'});

      const tryDecode = JwtMethods.decodeToken(tokenFalso);

      type DecodePayload = {role: string};

      expect(tryDecode).toMatchObject<DecodePayload>({role: 'adm'});
    });

    test('Testa o retorno em caso de null', () => {
      mockedJwt.decode.mockReturnValueOnce(null);

      const tryDecode = JwtMethods.decodeToken(tokenFalso);

      expect(tryDecode).toBeNull();
    });
  });

  describe('Testa os métodos de JwtSign', () => {
    afterAll(() => {
      mockedJwt.sign.mockReset();
    });

    test('Testa o método de assinatura', () => {
      mockedJwt.sign.mockImplementationOnce(() => 'abcdeFg');

      const signmethod = jwtMethods.jwtSign({role: 'adm', name: 'coisinho'});

      expect(typeof signmethod).toBe('string');
    });
  });
});
