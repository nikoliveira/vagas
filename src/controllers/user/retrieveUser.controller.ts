import { Request, Response } from "express";
import { retrieveUserService } from "../../services";

export const retrieveUserController = (req: Request, res: Response) => {
  const { id } = req.params;

  const retrievedUser = retrieveUserService(id);

  return res.status(200).json(retrievedUser);
};
