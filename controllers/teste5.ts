import { RequestHandler } from "express";
import { DATA } from "../data";

const coundUserVisit: RequestHandler = (req, res) => {
    var name: string = String(req.query.name);

    const findedUser = DATA.filter((item, index) => item.name.includes(name));

  if (!findedUser) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  const formatedResponse = findedUser.map((item) => {
    return `O usuário ${item.name} foi lido ${item.readCount}`;
  });

  res.status(200).send(formatedResponse);
};

module.exports = {
  coundUserVisit,
};
