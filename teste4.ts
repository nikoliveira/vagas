import { DATA } from "./data";
import { RequestHandler } from "express";
import { isValidUser } from "./utils";
import { API } from "./types/data.type";
const updateUser: RequestHandler = (req, res) => {
  const { id } = req.params;
  const { name, job } = req.body;
  const findedUser: API.IDataType = DATA.find((item) => item?.id === id);

  if (!findedUser) {
    res.status(404).send({ data: "Usuário não encontrado!", sucess: false });
  }

  if (findedUser && isValidUser(name, job)) {
    DATA.forEach((item, index) => {
      if (item?.id === id) {
        DATA[index].job = job;
        DATA[index].name = name;
      }
    });

    res
      .status(200)
      .send({ data: "Usuário actualizado com sucesso!", sucess: true });
  }

  if (findedUser && !isValidUser(name, job)) {
    res
      .status(400)
      .send({
        data: "Insira os campos correctos para poder actualizar o usuário!",
        sucess: false,
      });
  }
};

module.exports = {
  updateUser,
};
