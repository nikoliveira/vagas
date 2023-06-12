const data = require("./src/models/fakeData");

module.exports = function (req, res) {
  const name = req.query.name;

  const userToBeDeleted = data.find((user) => user.name === name);

  if (!userToBeDeleted) {
    return res.status(404).send("Usuario não encontrado");
  }

  data.forEach((user, i) => {
    if (user.name === name) {
      data.splice(i, 1);
    }
  });
  // for delete, 204 is the best status code, but don't return anything
  res.status(200).send("success");
};
