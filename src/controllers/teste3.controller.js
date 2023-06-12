const teste3Services = require('../services/teste3.services');

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