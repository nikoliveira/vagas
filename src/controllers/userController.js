const data = require("../models/fakeData");
const UserService = require("../services/userService");

module.exports = class UserController {
  getUser = (req, res) => {
    try {
      const { name } = req.query;

      const user = UserService.getUser(name);

      if (!user) {
        return res.status(404).send("Usuario não encontrado");
      }
      res.status(200).send(user);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  getUsers = (_req, res) => {
    const users = UserService.getUsers();
    res.status(200).send(users);
  };

  createUser = (req, res) => {
    const { name, job } = req.body;
    const newUser = UserService.createUser(name, job);

    if (!newUser) {
      return res.status(404).send("Usuario não encontrado");
    }
    res.status(201).send(newUser);
  };

  deleteUser = (req, res) => {
    const { name } = req.query;

    const userToBeDeleted = UserService.deleteUser(name);

    if (!userToBeDeleted) {
      return res.status(404).send("Usuario não encontrado");
    }

    // for delete, 204 is the best status code, but don't return anything
    res.status(200).send("success");
  };

  updateUser = function (req, res) {
    const { id } = req.query;
    const { name, job } = req.body;
  
    const user = UserService.updateUser(id, name, job);
    if (!user) {
      return res.status(404).send("Usuario não encontrado");
    }
    res.status(200).send(user);
  }

  getAccess (req, res) {
    const { name } = req.query;
    const userInfo = UserService.getAccess(name);
    if (!userInfo) {
      return res.status(404).send("Usuario não encontrado");
    }
    res.status(200).send(userInfo);
  };
};
