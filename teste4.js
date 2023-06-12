const data = require("./src/models/fakeData");

module.exports = function (req, res) {
  const id = req.query.id;
  const { name, job } = req.body;

  const reg = data.find((user) => user.id == id);
  if (!reg) {
    return res.status(404).send("Usuario não encontrado");
  }

  if (!name && !job) {
    return res.status(400).send("Dados inválidos");
  }

  if (name) {
    reg.name = name;
  }
  if (job) {
    reg.job = job;
  }

  res.status(200).send(reg);
};
