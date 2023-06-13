const data = require("./fakeData");

module.exports = function (req, res) {
  try {
    const name = req.body.name;
    const job = req.body.job;

    const newUser = {
      name: name,
      job: job,
    };

    data.push(newUser);

    res.send(newUser);
  } catch (error) {
    res.sendStatus(400);
  }
};
