const data = require("./fakeData");
const jwt = require("jsonwebtoken");

const createUser = (req, res) => {
  const { id, name, job } = req.body;

  const newUser = {
    id: id,
    name: name,
    job: job,
  };

  data.push(newUser);

  res.send(newUser);
};

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
