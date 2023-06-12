import { DATA } from "../data";
import { isValidUser } from "../utils";
import { RequestHandler } from "express";

const updateUser: RequestHandler = (req, res) => {
  const { id } = req.params;
  const { name, job } = req.body;

  const userIndex = DATA.findIndex((item) => item?.id === id);

  if (userIndex === -1) {
    return res
      .status(404)
      .send({ data: "Usuário não encontrado!", sucess: false });
  }

  if (!isValidUser(name, job)) {
    return res.status(400).send({
      data: "Insira os campos corretos para poder atualizar o usuário!",
      sucess: false,
    });
  }

  DATA[userIndex].name = name;
  DATA[userIndex].job = job;

  return res
    .status(200)
    .send({ data: "Usuário atualizado com sucesso!", sucess: true });
};

module.exports = {
  updateUser,
};
