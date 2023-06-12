import { DATA } from "./data";
import { RequestHandler } from "express";

const getUser: RequestHandler = (req, res, next) => {
  var name: string = String(req.query.name);

  const findedUser = DATA.filter((item, index) => item.name.includes(name));
  res.send(findedUser).status(200);
};

const getUsers: RequestHandler = (req, res, next) => {
  if (!Boolean(DATA.length)) {
    res.status(404).send("Nenhum usuário encontrado");
  }
  res.status(200).send({ data: DATA, sucess: true });
};

module.exports = {
  getUser,
  getUsers,
};
