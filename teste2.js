const data = require("./src/models/fakeData");

module.exports = function (req, res) {
  const { name, job } = req.body;

  const newUser = {
    id: data.length + 1,
    name: name,
    job: job,
    counter: 0,
  };

  if (!name || !job) {
    return res.status(400).send("Dados inválidos");
  }

  data.push(newUser);

  res.status(201).send(newUser);
};
