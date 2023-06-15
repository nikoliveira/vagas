const data = require("./fakeData");

module.exports = function (req, res) {
  const id = req.query.id;

  const { name, searched } = data.find((user) => user.id === id);

  res.send({ message: `Usuário "${name}"  foi lido ${searched} vezes.` });
};
