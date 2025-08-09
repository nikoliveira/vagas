const data = require("./fakeData");
const { checkPermission } = require("./teste6");

module.exports = [
  checkPermission("canDelete"),
  function (req, res) {
    const { name } = req.query;
    if (!name) {
      return res.status(400).send({ error: "Parâmetro 'name' é obrigatório" });
    }

    const index = data.findIndex(u => u.name.toLowerCase() === name.toLowerCase());
    if (index === -1) {
      return res.status(404).send({ error: "Usuário não encontrado" });
    }

    data.splice(index, 1);
    res.send({ message: "Usuário excluído com sucesso" });
  }
];
