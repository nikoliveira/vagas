import express from 'express';
import 'express-async-errors';
import { login } from './auth.controller';

const authRouter = express.Router();

authRouter.post('/login', login);

export default authRouter;
