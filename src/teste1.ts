import { RequestHandler } from "express";
import data from "./fakeData";

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

export default {
  getUser,
  getUsers,
};
