const data = require("./fakeData");


const readCount = {}; // contador em memória

const getUser = (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).send({ error: "Parâmetro 'name' é obrigatório" });
  }

  const user = data.find(u => u.name.toLowerCase() === name.toLowerCase());

  if (!user) {
    return res.status(404).send({ error: "Usuário não encontrado" });
  }

  // Incrementa contador
  readCount[name.toLowerCase()] = (readCount[name.toLowerCase()] || 0) + 1;

  return res.send(user);
};

const getUsers = (req, res) => {
  return res.send(data);
};

module.exports = {
  getUser,
  getUsers,
  readCount
};

