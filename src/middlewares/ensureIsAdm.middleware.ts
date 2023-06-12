import { AppError } from "../errors/AppError";
import { Response, NextFunction, Request } from "express";

const ensureIsAdmMiddleware = (req: any, res: Response, next: NextFunction) => {
  const isAdm = req.user.isAdm;

  if (!isAdm) {
    throw new AppError("User is not admin", 401);
  }

  return next();
};

export default ensureIsAdmMiddleware;
