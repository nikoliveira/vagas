const userRepository = require("../repository/user.js");

const getUser = ( req, res, next ) => {
  
    try {
        const {user} = userRepository.getOneUser(req.query)
        if (user) {
            res.send(user);
        } else {
            res.status(404).send("Usuário não encontrado");
        }
    } catch (error) {
        res.status(404).send("Erro ao buscar usuários");
    }
};

const getUsers = ( req, res, next ) => {
    try {
        const users = userRepository.getUsers()
        res.send(users); 
    } catch (error) {
        res.status(404).send("Erro ao buscar usuário");
    }
};

const postUser = ( req, res, next ) => {
    try {
        const newUser = userRepository.createUser(req.body)
        res.send(newUser);
    } catch (error) {
        res.status(404).send("Erro ao adicionar usuário");
    }
};

const deleteUser = ( req, res, next ) => {
  try {
      userRepository.deleteUser(req.query);
      res.send("success");
  } catch (error) {
      res.status(404).send(error);
  }
};

const putUser = ( req, res, next ) => {
  try {
      const { id } =  req.query;

      const userUpdated = userRepository.updateUser(id, req.body);
      res.send(userUpdated);
  } catch (error) {
      res.status(404).send(error);
  }
};

module.exports = {
    getUser,
    getUsers,
    postUser,
    deleteUser,
    putUser
};