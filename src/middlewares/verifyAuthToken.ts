import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import "dotenv/config";
import { AppError } from '../handlers/errors/appError';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if(!token) {
        return res.status(401).json({
            message: 'Error 401 (Unauthorized): No token provided.'
        });
    }

    const splitToken = token.split(" ");
    jwt.verify(splitToken[1], process.env.SECRET_KEY as string, (err: any, decoded: any) => {
        if(err) {
            return res.status(401).json({
                message: 'Error 401 (Unauthorized): Invalid token. ' + err
            });
        } else if(decoded.isAdmin === false) {
            throw new AppError('Error 403 (Forbidden): You are not an admin.', 403);
        } else {
          req.body.user = {
            id: decoded.id,
            name: decoded.name,
            isAdmin: decoded.isAdmin,
        }
        next();
    }
});
}

export default verifyToken;
