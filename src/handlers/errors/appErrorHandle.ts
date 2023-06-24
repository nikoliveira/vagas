import {Request, Response, NextFunction} from 'express';
import {AppError} from './appError';

const appErrorHandle = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: err.statusCode,
            message: err.message,
        });
    }
}

export default appErrorHandle;
