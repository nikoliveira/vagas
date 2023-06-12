import { Request, Response } from "express";
import { ILogin } from "../interfaces/user.interfaces";
import loginService from "../services/teste6.services";

const loginController = async (req: Request, res: Response) => {
  const data: ILogin = req.body;
  const token: string = await loginService(data);
  return res.status(200).json({token});
}

export default loginController;
