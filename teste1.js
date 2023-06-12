const data = require("./fakeData");

const getUser = (req, res) => {
  try {
    const name = req.query.name;

    let foundUser = null;

    data.forEach((user) => {
      if (user.name === name) {
        foundUser = user;
      }
    });

    if (foundUser) {
      res.send(foundUser);
    } else {
      res.send("Usuário não encontrado");
    }
  } catch (error) {
    res.status(500).send("Erro ao processar a solicitação");
  }
};

const getUsers = (_req, res) => {
  try {
    res.send(data);
  } catch (error) {
    res.status(500).send("Erro ao processar a solicitação");
  }
};

module.exports = {
  getUser,
  getUsers,
};
