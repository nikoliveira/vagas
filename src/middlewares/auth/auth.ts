import { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken';

const authToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.sendStatus(401).json({ 
      error : 'Authorization Header not exist'
    });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401).json({
      error: "Missing token in authorization header"
    });
  }

  jwt.verify(token, '51985364295', (err, user) => {
    if (err) {
      return res.sendStatus(403).json({
        error: "Authorization token not valid"
      });
    }
    next();
  })
}

export { authToken }