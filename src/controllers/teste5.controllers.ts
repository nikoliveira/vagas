import { Request, Response } from "express";
import QueryString from "qs";
import countUserService from "../services/teste5.services";

const countUserController = async (req: Request, res: Response) => {
  const name: 
    string | 
    QueryString.ParsedQs | 
    string[] | 
    QueryString.ParsedQs[] | 
    undefined = req.query.name;
    const counter: number | undefined = await countUserService(name);

    return res.status(200).json(`Usuário ${name} foi lido ${counter} vezes.`);
}

export default countUserController;
