import { Request, Response } from "express";
import deleteUserService from "../services/teste3.services";
import QueryString from "qs";

const deleteUserController = async (req: Request, res: Response) => {
  const userId: 
    string | 
    QueryString.ParsedQs | 
    string[] | 
    QueryString.ParsedQs[] | 
    undefined = req.query.id;
  await deleteUserService(userId);
  return res.status(204).send();
}

export default deleteUserController;
