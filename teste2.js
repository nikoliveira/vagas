const data = require("./fakeData");

module.exports = function (req, res) {
  const { name, job } = req.body;

  let newUser;

  if (!!name && !!job) {
    newUser = {
      id: Math.random().toString(36).slice(2), // gera um ID aleatório, muda a base numérica e recorta a parte fracionada.
      name: name,
      job: job,
      searched: 0,
      admin: false,
    };

    data.push(newUser);

    return res.status(201).send(newUser);
  }

  return res
    .status(400)
    .send({ message: 'The fields "name" and "job" must have a content' });
};
