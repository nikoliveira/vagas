const data = require("./fakeData");

// Método para remover usuário da base.
module.exports = function(req, res) {
  try {
    const { name } = req.query;
    const userIndex = data.findIndex(user => user.name === name);

    if (userIndex !== -1) {
      data.splice(userIndex, 1);
      res.send('Usuário removido com sucesso');
    } else {
      res.status(404).send('Usuário não encontrado');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao excluir usuário');
  }
};
