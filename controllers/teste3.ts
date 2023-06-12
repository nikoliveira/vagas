import { DATA } from "../data";
import { RequestHandler } from "express";
import { API } from "../types/data.type";

const deleteUser: RequestHandler = (req, res) => {
  const { id } = req.params;
  const userIndex: number = DATA.findIndex((item) => item?.id === id);

  if (userIndex === -1) {
    return res
      .status(404)
      .send({ message: "Usuário não encontrado!!", sucess: false });
  }

   DATA.splice(userIndex,1);

  return res
    .status(200)
    .send({ message: "Usuário deletado com sucesso!", sucess: true });
};

module.exports  = {
  deleteUser
};
