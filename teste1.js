const data = require("./fakeData");

const getUser = (req, res) => {
  const name = req.query.name;

  const user = data.find((user) => user.name === name);

  if (user) {
    user.counter += 1;
    res.status(200).send(user);
  } else {
    res.status(404).send("Usuario não encontrado");
  }
};

const getUsers = (_req, res) => {
  data.map((user) => (user.counter += 1))
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
