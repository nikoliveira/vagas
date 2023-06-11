import UserService from '../services/UserService.mjs';
import { randomId } from '../teste2.mjs';

export default class UserController {
  constructor() {
    this.service = new UserService();
  }

  getUser(req, res) {
    const name = req.query.name;
    const user = this.service.getUserByName(name);

    if (user) {
      this.service.updateUserCount(name);
      res.send(user);
    } else {
      res.status(404).send('Usuário não encontrado');
    }
  }

  getUsers(req, res) {
    const users = this.service.getUsers();
    res.send(users);
  }

  deleteUser(req, res) {
    const id = req.params.id;
    this.service.deleteUser(id);
    res.send('Usuário removido com sucesso');
  }

  createUser(req, res) {
    const {name,job} = req.body;
    const newUser = {
      id: randomId(),
      name,
      job,
      role: "USER",
      count: 0
    }
    const user = this.service.createUser(newUser);
    res.send(user);
  }

  updateUser(req, res) {
    const id = req.params.id;
    const updatedUser = req.body;
    const user = this.service.updateUser(id, updatedUser);

    if (user) {
      res.send(user);
    } else {
      res.status(404).send('Usuário não encontrado');
    }
  }
  getTotal(req, res){
    const name = req.query.name;
    const user = this.service.getUserByName(name);

    if (user) {
      res.send({message: `User - ${user.name} foi lido : ${user.count > 1 ? `${user.count} vezes` : `${user.count} vez`}`});
    } else {
      res.status(404).send('Usuário não encontrado');
    }
  }
}