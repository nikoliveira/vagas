const data = require("./fakeData");

const getUser = (req, res, next) => {
  const id = req.query.id;

  const user = data.find((current) => current.id === id);

  if (user) {
    user.searched += 1;

    return res.status(200).send({
      id: user.id,
      name: user.name,
      job: user.job,
    });
  }

  return res.status(404).send({ message: "User not found" });
};

const getUsers = (req, res, next) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
