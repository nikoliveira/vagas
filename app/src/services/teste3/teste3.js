const data = require("../../db/fake");

/*
 *
 * Este procura um usuário e o deleta da base.
 * Retorne sucesso para o client caso realmente
 * tenha sido excluido e deixe o código mais performatico.
 *
 */

module.exports = (req, res, next) => {
  const name = (req.query?.name || "");

  if (!name) {
    return res.status(400).send({ message: "Missing query param: name" });
  }

  const idx = data.findIndex((u) => u.name === name);

  if (idx === -1) {
    return res.status(404).send({ message: "User not found!" });
  }

  const [removed] = data.splice(idx, 1);

  return res.status(200).send({ success: true, removed });
};
