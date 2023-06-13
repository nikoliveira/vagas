const data = require("./fakeData");

const getUserCount = (req, res) => {
  const name = req.query.name;

  const user = data.find((item) => item.name === name);
  if (user && user.readCount) {
    res.send(`Usuário ${name} foi lido ${user.readCount} vezes.`);
  } else {
    res.send("Usuário não encontrado ou não foi lido.");
  }
};

module.exports = getUserCount;
