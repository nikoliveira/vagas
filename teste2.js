const data = require("./fakeData");

module.exports = function (req, res) {
  const { name, job } = req.body;

  if (!name || !job) {
    return res.status(400).send({ error: "Campos 'name' e 'job' são obrigatórios" });
  }

  const newUser = {
    id: data.length ? data[data.length - 1].id + 1 : 1,
    name,
    job
  };

  data.push(newUser);

  return res.status(201).send(newUser);
};

