import { Request, Response } from "express";
import { getUserService } from "../services/teste1.services";

export const getUserController = async ( req: Request, res: Response )=> {
  const name =  req.query.name;
  const user = await getUserService(name);
  return res.status(200).json(user);
};
