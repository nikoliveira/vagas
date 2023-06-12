import { DATA } from "./data";
import { RequestHandler } from "express";
import { API } from "./types/data.type";

const deleteUser: RequestHandler = (req, res) => {
  const { id } = req.params;
  const findedUser: API.IDataType = DATA.find((item) => item?.id === id);

  if (findedUser) {
    DATA.forEach((item, index) => {
      if (item?.id === id) {
        delete DATA[index];
      }
    });

    res
      .status(200)
      .send({ message: "Usuário deletado com sucesso!", sucess: true });
  }

  res.status(404).send({ message: "Usuário não encontrado!!", sucess: false });
};

module.exports = {
  deleteUser,
};
