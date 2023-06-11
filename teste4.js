const data = require("./fakeData");


// Método para atualizar os dados do usuário da base.
module.exports = function(req, res) {
  try {
    const { id } = req.query;
    const reg = data.find(d => d.id === parseInt(id));

    if (reg) {
      reg.name = req.body.name;
      reg.job = req.body.job;
      res.send(reg);
    } else {
      res.status(404).send('Registro não encontrado');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao atualizar registro');
  }
};
