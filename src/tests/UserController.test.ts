import UserController from '../controllers/UserController';
import type UserI from '../interfaces/IUser';
import type {Request, Response} from 'express';
import newUser from './mock/newUser';
import UserModel from '../models/User';
import getCallUser from './mock/getCallUser';
import MockUserModel from './mock/UserModelMock';

let userModel: UserModel;

const createMockReqRes = () => {
  const req: Partial<Request> = {body: {}, query: {}} as Request;
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
    send: jest.fn(),
  };

  return {req, res};
};

describe('Tests user controller', () => {
  let userController: UserController;
  let userModelMock: MockUserModel;

  beforeEach(() => {
    userModel = new UserModel();
    userController = new UserController();
    userModelMock = new MockUserModel();

    (userController as any).model = userModelMock;
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe('Tests the route getUser', () => {
    test('If user in query is invalid', () => {
      const {req, res} = createMockReqRes();

      req.query = {};
      req.query.name = undefined;

      userController.getUser(req as Request, res as Response);

      expect(res.send).toBeCalledWith('Usuário inválido.');
    });

    test('If user query is ok', () => {
      const {req, res} = createMockReqRes();
      req.query = {};
      req.query.name = 'John';

      const user: UserI = newUser[0];

      userController.getUser(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({
        ...user,
        id: expect.any(Number),
        called: expect.any(Number),
      });
    });
  });

  describe('Tests the route getUsers', () => {
    test('Return an array of users', () => {
      const {req, res} = createMockReqRes();

      userModel.getUsers = jest.fn().mockReturnValue([{
        name: 'John',
        job: 'Engineer',
        called: 1,
        id: 123,
        role: 'common',
      }]);

      userController.getUsers(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalled();
      expect(res.send).toHaveBeenCalledWith([{
        ...newUser[0],
        id: expect.any(Number),
        called: expect.any(Number),
      }]);
    });
  });

  describe('Tests the route setUser', () => {
    test('Tests if setUser returns a new user', () => {
      const {req, res} = createMockReqRes();

      const setUser = {
        ...newUser[0],
        name: 'Alfredo',
        job: 'Gato',
      };

      req.body.name = setUser.name;
      req.body.job = setUser.job;

      userController.setUser(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.send).toHaveBeenCalled();

      expect(res.send).toHaveBeenCalledWith({
        ...setUser,
        id: expect.any(Number),
        called: expect.any(Number),
      });
    });
  });

  describe('Tests getCallUser', () => {
    test('Tests if getCallUser returns an object containg visitors number', () => {
      const {req, res} = createMockReqRes();
      req.query = {};
      req.query.name = 'Alfredo';

      userController.getCallUser(req as Request, res as Response);

      expect(res.status).toBeCalledWith(201);
      expect(res.send).toBeCalled();
      expect(res.send).toBeCalledWith({
        ...getCallUser,
      });
    });

    test('Returns an string if user does not exist', () => {
      const {req, res} = createMockReqRes();
      req.query = {};
      req.query.name = 'Emilia';

      userModel.getCallUser = jest.fn().mockReturnValueOnce('User not found');

      userController.getCallUser(req as Request, res as Response);

      expect(res.status).toBeCalledWith(201);
      expect(res.send).toBeCalled();
    });
  });

  describe('Tests route deleteUser', () => {
    test('Tests if username is inválid', () => {
      const {req, res} = createMockReqRes();

      req.query = {};
      req.query.name = undefined;

      userController.deleteUser(req as Request, res as Response);

      expect(res.status).toBeCalledWith(422);
      expect(res.send).toBeCalled();
    });

    test('Tests if deleteUser returns ok', () => {
      const {req, res} = createMockReqRes();

      req.query = {};
      req.query.name = 'Marco';

      userController.deleteUser(req as Request, res as Response);

      expect(res.status).toBeCalledWith(201);
      expect(res.send).toBeCalled();

      expect(res.send).toHaveBeenCalledWith('ok');
    });
  });

  describe('Tests route updateUser', () => {
    test('Tests if updateUser is capable to change an user', () => {
      const {req, res} = createMockReqRes();

      const userUpdate = {name: 'Alan', job: 'I.T.'};
      req.query = {};
      req.query.id = '123';
      req.body = userUpdate;

      userController.updateUser(req as Request, res as Response);

      expect(res.status).toBeCalledWith(201);
      expect(res.send).toBeCalled();

      expect(res.send).toHaveBeenCalledWith({
        ...newUser,
        ...userUpdate,
      });
    });
  });

  describe('Tests route generate token', () => {
    test('If name is not declared', () => {
      const {req, res} = createMockReqRes();
      req.body.name = undefined;

      userController.generateToken(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith('Inválid name');
    });

    test('Token is generated', () => {
      const {req, res} = createMockReqRes();
      req.body.name = newUser[0].name;

      userController.generateToken(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(expect.any(String));
    });
  });
});
