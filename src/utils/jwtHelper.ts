import jwt, { SignOptions, JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import APIError from './errorClass';

dotenv.config();

const { JWT_SECRET } = process.env;

if (!JWT_SECRET) {
  throw new APIError('Um JWT_SECRET deve ser definido.', 'serverError');
}

const sign = (payload: JwtPayload) => {
  const options: SignOptions = {
    algorithm: 'HS256',
    expiresIn: '1h',
  };

  const token = jwt.sign(payload, JWT_SECRET, options);
  return token;
};

const verify = (token: string) =>
  jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] });

export { sign, verify };
