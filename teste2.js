const data = require("./fakeData");
const jwt = require("jsonwebtoken");

const createUser = (req, res) => {
  const { id, name, job, permissions } = req.body;

  const newUser = {
    id: id,
    name: name,
    job: job,
    permissions: permissions,
  };

  data.push(newUser);

  res.send(newUser);
};

//O código abaixo gerar o token de permissão de acordo com o role criado.

const generateToken = (permissions = [], role) => {
  return jwt.sign({ permissions, role }, process.env.SECRET_KEY);
};

const auth = (req, res) => {
  const { role } = req.body;

  let permissions = [];
  if (role === "admin") {
    permissions = ["delete", "update"];
  }

  const token = generateToken(permissions, role);
  res.json({ token });
};

module.exports = {
  createUser,
  auth,
};
