import { Request, Response } from "express";
import { createSessionService } from "../../services";
import { ISession } from "../../interfaces/session";

export const createSessionController = async (req: Request, res: Response) => {
  const { name, password }: ISession = req.body;

  const token = await createSessionService({ name, password });

  return res.status(200).json(token);
};
