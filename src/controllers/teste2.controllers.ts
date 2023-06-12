import { Request, Response } from "express";
import { IUser, IUserRequest } from "../interfaces/user.interfaces";
import postUserService from "../services/teste2.services";

const postUserController = async (req: Request, res: Response) => {
  const newUserData: IUserRequest = req.body;
  const user: IUser = await postUserService(newUserData);
  return res.status(201).json(user);
}

export default postUserController;
