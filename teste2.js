const data = require("./fakeData");


// Método para criar um novo usuário na base.
module.exports = function(req, res) {
  try {
    const { name, job } = req.body;

    if (!name || !job) {
      res.status(400).send('Campos "name" e "job" são obrigatórios');
      return;
    }

    const newUser = {
      name,
      job,
    };

    data.push(newUser);

    res.send(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao adicionar novo usuário');
  }
};
