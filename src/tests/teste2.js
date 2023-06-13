// var data = require("./fakeData");
import data from "../database/fakeData.js";

export function createUser(req, res) {
  var name = req.body.name;
  var job = req.body.job;

  var newUser = {
    name: name,
    job: job,
  };

  data.push(newUser);

  res.send(newUser);
}
