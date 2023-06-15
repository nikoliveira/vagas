const data = require("./fakeData");

const getUser = (req, res, next) => {
  const name = req.query.name;

  if (!name) {
    return res.send("Nome não fornecido");
  }

  const user = data.find((item) => item.name === name);
  try {
    if (user) {
      if (user.readCount) {
        user.readCount = user.readCount + 1;
      } else {
        user.readCount = 1;
      }
      const userWithoutReadCount = { ...user };
      delete userWithoutReadCount.readCount;

      res.send(userWithoutReadCount);
    } else {
      res.send("Usuário não encontrado");
    }
  } catch (error) {
    res.send("Erro ao buscar usuário");
  }
};

const getUsers = (req, res, next) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
