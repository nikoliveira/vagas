import { Request, Response } from "express";
import { IUserAuth } from "../interfaces/auth/IUserAuth";
import { authService } from "../services/auth/authService";

export const AuthController = async (req: Request, res: Response) => {
    try{
    const { name, password } : IUserAuth = req.body;
    const token = await authService({name, password});
    return res.json(token);
    } catch(err: any) {
        return res.status(401).json({message: err.message});
    }
}
