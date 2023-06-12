import { RequestHandler } from "express";
import data from "../fakeData";

const getUser: RequestHandler = (req, res) => {
  var name = req.query.name;

  for (let i = 0; i < data.length; i++) {
    if (i.name == name) {
      res.send(data[i]);
    }
  }
};

const getUsers: RequestHandler = (req, res) => {
  res.send(data);
};

const createUser: RequestHandler = (req, res) => {
  const name = req.body.name;
  const job = req.body.job;

  const newUser = {
    name: name,
    job: job,
  };

  data.push(newUser);
  res.send(newUser);
};

const deleteUser: RequestHandler = (req, res) => {
  const name = req.query.name;

  for (let i = 0; i < data.length; i++) {
    if (i.name == name) {
      data[i] = null;
    }
  }

  res.send("success");
};

const updateUser: RequestHandler = (req, res) => {
  const id = req.query.id;

  const reg = data.find((d) => id == id);
  reg.name = req.body.name;
  reg.job = req.body.job;
  res.send(reg);
};

const countReads: RequestHandler = (req, res) => {
  const name = req.query.name;
  res.send("Usuário " + name + "  foi lido 0 vezes.");
};

export default {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  countReads,
};
