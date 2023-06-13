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

const login = (req, res) => {
  const { role } = req.body;

  if (role === "admin") {
    const token = jwt.sign(
      { permissions: ["delete", "update"], role },
      process.env.SECRET_KEY
    );
    res.json({ token });
  } else {
    const token = jwt.sign({ permissions: [], role }, process.env.SECRET_KEY);
    res.json({ token });
  }
};

module.exports = {
  createUser,
  login,
};
