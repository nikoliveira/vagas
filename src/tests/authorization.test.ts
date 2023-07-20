import type {Request, Response, NextFunction} from 'express';
import JwtMethods from '../helper/jwt';
import type {JwtPayload} from 'jsonwebtoken';
import Authorization from '../middleware/authorization';

jest.mock('../helper/jwt');
const mockedJwtMethods = JwtMethods as jest.Mocked<typeof JwtMethods>;

const createMockReqResNext = () => {
  const req: Request = {headers: {authorization: 'mocked_token'}} as Request;
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  const next = jest.fn() as NextFunction;

  return {req, res, next};
};

describe('Testa authorization', () => {
  let authorization: Authorization;

  beforeEach(() => {
    authorization = new Authorization();
    mockedJwtMethods.verifyToken.mockReset();
    mockedJwtMethods.decodeToken.mockReset();
  });

  describe('verifyAuth', () => {
    test('Test status 401 send if token is not found in headers', () => {
      const {req, res, next} = createMockReqResNext();

      req.headers.authorization = undefined;

      authorization.verifyAuth(req, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({error: 'Token not found'});
    });

    test('Test expired token', () => {
      const {req, res} = createMockReqResNext();

      mockedJwtMethods.verifyToken.mockImplementationOnce(() => {
        throw new Error();
      });

      authorization.verifyAuth(req, res as Response, jest.fn() as NextFunction);

      expect(res.status).toBeCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({error: 'Token invalid or expired'});
    });

    test('Test if wrong role the process is stoped', () => {
      const {req, res} = createMockReqResNext();

      const decodedToken: JwtPayload = {role: 'user'};

      mockedJwtMethods.decodeToken.mockReturnValueOnce(decodedToken);

      authorization.verifyAuth(req, res as Response, jest.fn() as NextFunction);

      expect(res.status).toBeCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({error: 'Token invalid or expired'});
    });

    test('tests if decode token returns null', () => {
      const {req, res} = createMockReqResNext();

      const decodedToken = null;

      mockedJwtMethods.decodeToken.mockReturnValueOnce(decodedToken);

      authorization.verifyAuth(req, res as Response, jest.fn());

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({error: 'Token invalid or expired'});
    });

    test('tests if next function is called in a normal flow', () => {
      const {req, res, next} = createMockReqResNext();

      const decodedToken: JwtPayload = {role: 'adm'};

      mockedJwtMethods.decodeToken.mockReturnValueOnce(decodedToken);

      authorization.verifyAuth(req, res as Response, next);

      expect(next).toHaveBeenCalled();
    });
  });
});
