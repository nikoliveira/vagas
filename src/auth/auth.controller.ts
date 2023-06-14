import { RequestHandler } from 'express';
import joiValidate from '../utils/joiValidation';
import loginSchema from './auth.schema';
import authService from './auth.service';

const login: RequestHandler = async (req, res) => {
  joiValidate(loginSchema, req.body);

  const token = await authService.login(req.body);
  res.status(200).json({ token });
};

export default login;
