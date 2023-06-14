import { Request, Response } from "express";
import { updateUserService } from "../../services";

export const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, password, job } = req.body;

  const updatedUser = await updateUserService(id, { name, password, job });

  return res.status(200).json(updatedUser);
};
