import { RequestHandler, Request } from 'express';
import { verify } from '../utils/jwtHelper';

interface TokenPayload {
  id: number;
  isAdmin?: boolean;
}

interface RequestAuth extends Request {
  user?: TokenPayload;
}

const tokenChecker: RequestHandler = (req: RequestAuth, res, next) => {
  const token: string | undefined = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado.' });
  }

  try {
    const data = verify(token) as TokenPayload;
    req.user = { ...data };
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: 'Token inválido.' });
  }

  next();
};

const permissionChecker: RequestHandler = (req: RequestAuth, res, next) => {
  if (!req.user?.isAdmin) {
    return res.status(403).json({ error: 'Acesso negado.' });
  }

  next();
};

export { tokenChecker, permissionChecker };
