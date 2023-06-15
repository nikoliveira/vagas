import { Request, Response } from "express";
import { createUserService } from "../../services";
import { IUserCreate } from "../../interfaces/user";

export const createUserController = async (req: Request, res: Response) => {
  const { name, password, job, isAdm }: IUserCreate = req.body;

  const newUser = await createUserService({ name, password, job, isAdm });

  return res.status(200).json(newUser);
};
