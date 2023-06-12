const data = require("./src/models/fakeData");

module.exports = function (req, res) {
  const name = req.query.name;
  const user = data.find((user) => user.name === name);
  if (!user) {
    return res.status(404).send("Usuario não encontrado");
  }
  res.status(200).send(`Usuário ${user.name} foi lido ${user.counter} vezes.`);
};
