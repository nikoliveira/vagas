const data = require("../models/fakeData");
const UserService = require("../services/userService");

module.exports = class UserController {
  getUser = (req, res) => {
    try {
      const name = req.query.name;
  
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
}
