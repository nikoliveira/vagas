const data = require("./fakeData");

module.exports = function (req, res) {
  const id = req.query.id;
  const user = data.find((user) => user.id == id);

  if (!user) return res.status(404).send({ message: "User not found" });

  user.name = req.body.name;
  user.job = req.body.job;

  return res.status(200).send({
    id: user.id,
    name: user.name,
    job: user.job,
  });
};
