import { Request, Response } from "express";
import deleteUserService from "../services/teste3.services";

const deleteUserController = async (req: Request, res: Response) => {
  const userId: string | number = req.params.id;
  await deleteUserService(userId);
  return res.status(204).send();
}

export default deleteUserController;
