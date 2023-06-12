import { DATA } from "../data";
import { randomUUID } from "crypto";
import { isValidUser } from "../utils";
import { API } from "../types/data.type";
import { RequestHandler } from "express";

const addUser: RequestHandler = (req, res) => {
  const { name, job } = req.body;

  if (!isValidUser(name, job)) {
    return res.status(400).send({
      Error: { success: false, message: "Insira os campos corretos!" },
    });
  }

  const newUser: API.IDataType = {
    id: randomUUID(),
    name: name,
    job: job,
    readCount: 0,
  };

  DATA.push(newUser);

  return res.status(201).send({
    success: true,
    data: {newUser},
    message: "Usuário cadastrado com sucesso!",
  });
};

module.exports = {
  addUser,
};
