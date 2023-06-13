import { Request, Response, NextFunction } from "express"
import { logger } from "../../app";

class GetUserLogger {
  id: number;
  count?: number;

  constructor(id: number, count?: number){
    this.id = id;
    if (!this.count) {
      this.count = 0;
    }
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