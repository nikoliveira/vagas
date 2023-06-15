import { Request, Response } from "express";
import { deleteUserService } from "../../services";

export const deleteUserController = (req: Request, res: Response) => {
  const { id } = req.params;

  const deleted = deleteUserService(id);

  return res.status(200).json(deleted);
};
