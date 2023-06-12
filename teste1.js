let data = require("./fakeData");

const getUser = (req, res) => {
  const name = req.query.name;

  const user = data.find((user) => user.name === name);

  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send("Usuario não encontrado");
  }
};

const getUsers = (_req, res) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
