const data = require("./fakeData");

module.exports = function (req, res) {
  try {
    const id = parseInt(req.query.id, 10);

    const user = data.find((user) => user.id === id);
    if (user) {
      user.name = req.body.name;
      user.job = req.body.job;
      res.send(user);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.sendStatus(500);
  }
};
