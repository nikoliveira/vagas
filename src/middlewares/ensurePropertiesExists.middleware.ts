import { AppError } from "../errors/AppError";
import { Request, Response, NextFunction } from "express";

const ensurePropertiesExistsMiddleware = async ( req: Request, res: Response, next: NextFunction) => {
  const { name, job } = req.body;

  if (!name || !job ) {
    throw new AppError("Name and job are required fields");
  }

  return next();
};

export default ensurePropertiesExistsMiddleware;
