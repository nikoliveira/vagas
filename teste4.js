const data = require("./fakeData");

const updateUser = (req, res) => {
  const id = req.query.id;

  const userId = data.find((d) => d.id == id);

  if (!userId) {
    return res.send("Registro não encontrado");
  }

  if (!req.body || !req.body.name || !req.body.job) {
    return res.status(400).send("Dados inválidos");
  }

  try {
    reg.name = req.body.name;
    reg.job = req.body.job;
    res.send(reg);
  } catch (error) {
    res.status(500).send("Erro ao atualizar o registro");
  }
};

module.exports = {
  updateUser,
};
