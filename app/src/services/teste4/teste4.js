const data = require("../../db/fake");

/*
 * Atualiza os dados de um usuário específico.
 */
module.exports = function (req, res) {
  const id = parseInt(req.query.id, 10);

  if (!id) {
    return res.status(400).send({ message: "Missing query param: id" });
  }

  const idx = data.findIndex((d) => d.id === id);

  if (idx === -1) {
    return res.status(404).send({ message: "User not found!" });
  }

  data[idx].name = req.body.name || data[idx].name;
  data[idx].job = req.body.job || data[idx].job;

  return res.status(200).send({ success: true, updated: data[idx] });
};
