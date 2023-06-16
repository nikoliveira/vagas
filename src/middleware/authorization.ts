import type {NextFunction, Request, Response} from 'express';
import JwtMethods from '../helper/jwt';
import type {JwtPayload} from 'jsonwebtoken';

class Authorization {
  protected authMethods: JwtMethods;

  constructor() {
    this.authMethods = new JwtMethods();
  }

  verifyAuth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({error: 'Token not found'});
    }

    const isAdm = 'adm';

    try {
      JwtMethods.verifyToken(token);

      const decoded = JwtMethods.decodeToken(token) as JwtPayload;
      if (!decoded) {
        throw new Error();
      }

      if (decoded.role !== isAdm) {
        throw new Error();
      }

      next();
    } catch (error) {
      return res.status(401).json({error: 'Token invalid or expired'});
    }
  };
}

export default Authorization;
