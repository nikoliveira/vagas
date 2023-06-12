const teste4Services = require('../services/teste4.services');

const updateUser = (req, res) => {
  try {
    const { id } = req.query;
    const { name, job } = req.body;
    const result = teste4Services.updateUser(id, name, job);
    if (result) {
      return res.status(202).json({ message: 'Usuário atualizado com sucesso!' });
    } else {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { updateUser };