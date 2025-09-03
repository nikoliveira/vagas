const data = require("../../db/fake");

/*
 * Retorne quantas vezes determinado usuário foi lido no teste1.
 */
module.exports = function (req, res) {
  const name = (req.query?.name || "").trim();

  if (!name) {
    return res.status(400).send({ message: "Missing query param: name" });
  }

  const user = data.find((u) => u.name === name);

  if (!user) {
    return res.status(404).send({ message: "User not found!" });
  }

  if (!user.readCount) {
    user.readCount = 0;
  }

  user.readCount++;

  return res
    .status(200)
    .send(`Usuário ${name} foi lido ${user.readCount} vezes.`);
};
