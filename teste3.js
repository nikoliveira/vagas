const data = require("./fakeData");

const deleteUser = (req, res) => {
  const name = req.query.name;
  const user = data.findIndex((item) => item.name === name);

  if (user !== -1) {
    data.splice(user, 1);
    res.send("success");
  } else {
    res.send("Usuário não encontrado");
  }
};

module.exports = deleteUser;
