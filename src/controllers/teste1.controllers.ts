import { Request, Response } from "express";
import { getUserService, getUsersService } from "../services/teste1.services";
import { IUser } from "../interfaces/user.interfaces";
import QueryString from "qs";

export const getUserController = async (req: Request, res: Response) => {
  const name: 
    string | 
    QueryString.ParsedQs | 
    string[] | 
    QueryString.ParsedQs[] | 
    undefined =  req.query.name;
  const user: IUser = await getUserService(name);
  return res.status(200).json(user);
}

export const getUsersController = async (req: Request, res: Response) => {
  const users: IUser[] = await getUsersService();
  return res.status(200).json(users);
};
