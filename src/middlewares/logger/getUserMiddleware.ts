import { Request, Response, NextFunction } from "express"
import { logger } from "../../app";

class GetUserLogger {
  id: number;

  constructor(id: number){
    this.id = id;
  }
}

const getUserMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { user_id } = req.params;
  const id = parseInt(user_id, 10);
  const userLogger = new GetUserLogger(id)
  logger.info(userLogger);
  next()
}

export { getUserMiddleware }