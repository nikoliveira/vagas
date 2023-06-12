const teste3Services = require('../services/teste3.services');

// recebe o name via body da requisição e solicita a exclusão de um usuário com o name existente ao service do teste3.
const deleteUser = (req, res) => {
  try {
    const { name } = req.body;
    const result = teste3Services.deleteUser(name);
    if (result) {
      return res.status(202).json({ message: 'Usuário deletado com sucesso!' });
    } else {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = { deleteUser };