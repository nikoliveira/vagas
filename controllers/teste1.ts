import { DATA } from "../data";
import { RequestHandler } from "express";

const getUser: RequestHandler = (req, res, next) => {
  var name: string = String(req.query.name);
  
  const findedUser = DATA.filter((item, index) =>
    item.name.includes(name)
  );
  res.send(findedUser).status(200);
};

const getUsers: RequestHandler = (req, res, next) => {
  if (DATA.length === 0) {
    return res
      .status(404)
      .json({ data: [], success: false, message: "Nenhum usuário encontrado" });
  }

  return res.status(200).json({ data: DATA, success: true });
};

module.exports  =  {
  getUser,
  getUsers,
};
