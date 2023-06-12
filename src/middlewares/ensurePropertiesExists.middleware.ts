import { AppError } from "../errors/AppError";
import { Request, Response, NextFunction } from "express";

const ensurePropertiesExistsMiddleware = async ( req: Request, res: Response, next: NextFunction) => {
  const { name, job, username, password } = req.body;

  if (!name || !job || !username || !password) {
    throw new AppError("Name, job, username, password and isAdm are required fields");
  }

  return next();
};

export default ensurePropertiesExistsMiddleware;
