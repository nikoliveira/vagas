const teste4Services = require('../services/teste4.services');

// recebe o id via query e o name e o job via body da requisição
// e solicita a atualização do usuário com o id existente ao service do teste4.
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