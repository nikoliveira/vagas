const data = require("./fakeData");
const { checkPermission } = require("./teste6");

module.exports = [
  checkPermission("canUpdate"),
  function (req, res) {
    const { id } = req.query;
    const { name, job } = req.body;

    if (!id) {
      return res.status(400).send({ error: "Parâmetro 'id' é obrigatório" });
    }

    const reg = data.find(u => u.id == id);
    if (!reg) {
      return res.status(404).send({ error: "Usuário não encontrado" });
    }

    if (name) reg.name = name;
    if (job) reg.job = job;

    res.send(reg);
  }
];
