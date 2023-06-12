import { Request, Response } from "express";
import { IUser, IUserRequest } from "../interfaces/user.interfaces";
import putUserService from "../services/teste4.services";
import QueryString from "qs";

const putUserController = async (req: Request, res: Response) => {
  const userId: 
    string | 
    QueryString.ParsedQs | 
    string[] | 
    QueryString.ParsedQs[] | 
    undefined = req.query.id;
  const newUserData: IUserRequest = req.body;
  const updatedUser: IUser = await putUserService(userId, newUserData);
  return res.status(200).json(updatedUser);
}

export default putUserController;
