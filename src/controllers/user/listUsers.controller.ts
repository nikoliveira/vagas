import { Request, Response } from "express";
import { listUsersService } from "../../services";

export const listUsersController = (req: Request, res: Response) => {
  const allUsers = listUsersService();

  return res.status(200).json(allUsers);
};
