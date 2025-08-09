const { readCount } = require("./teste1");

module.exports = function (req, res) {
  const { name } = req.query;

  if (!name) {
    return res.status(400).send({ error: "Parâmetro 'name' é obrigatório" });
  }

  const count = readCount[name.toLowerCase()] || 0;
  res.send({message:`Usuário ${name} foi lido ${count} vezes.`});
};
