const data = require("../../../../fakeData");

const getUser = (req, res, next) => {
  const { name } = req.query;
  const user = data.find((user) => user.name === name);

  if (!user) {
    return res.status(404).send({ message: "User not found!" });
  }

  return res.send(user);
};

const getUsers = (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const start = (page - 1) * limit;
  const end = start + limit;

  const users = data.slice(start, end);

  res.send({
    page,
    limit,
    total: data.length,
    users,
  });
};

module.exports = {
  getUser,
  getUsers,
};
