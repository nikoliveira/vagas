import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import type PayloadJwt from '../types/payload';
dotenv.config();

const secret = process.env.JWT_SECRET ?? '123';

class JwtMethods {
  static verifyToken(token: string) {
    const verifying = jwt.verify(token, secret, {algorithms: ['HS256']});

    return verifying;
  }

  static decodeToken(token: string) {
    const decode = jwt.decode(token);

    return decode;
  }

  jwtSign(payload: PayloadJwt) {
    const sign = jwt.sign(payload, secret, {
      expiresIn: '5h',
      algorithm: 'HS256',
    });

    return sign;
  }
}

export default JwtMethods;
