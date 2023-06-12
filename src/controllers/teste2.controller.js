const teste2Services = require('../services/teste2.services');

// recebe o name e o job via body da requisição e solicita a criação de um novo usuário ao service do teste2.
const createUser = (req, res) => {
  try {
    const { name, job } = req.body;
    const result = teste2Services.createUser(name, job);
    if (result) {
      return res.status(201).json({ message: 'Usuário criado com sucesso!' });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { createUser };