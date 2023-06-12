import { DATA } from "../data";
import { RequestHandler } from "express";


// to get  one or more users with the name
const getUser: RequestHandler = (req, res, next) => {
  var name: string = String(req.query.name);

  const findedUser = DATA.filter((item, index) => item.name.includes(name));

  if (!findedUser) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }
  findedUser.forEach((finded) => {
    DATA.forEach((item, index) => {
      if (finded.id === item.id) DATA[index].readCount += 1;
    });
  });
  
  res.send(findedUser).status(200);
};





// to get all users

const getUsers: RequestHandler = (req, res, next) => {
  if (DATA.length === 0) {
    return res
      .status(404)
      .json({ data: [], success: false, message: "Nenhum usuário encontrado" });
  }

  return res.status(200).json({ data: DATA, success: true });
};

module.exports = {
  getUser,
  getUsers,
};
