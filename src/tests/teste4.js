import data from "../database/fakeData.js";

export function updateUser(req, res) {
  var id = req.query.id;

  const reg = data.find((d) => id == id);
  reg.name = req.body.name;
  reg.job = req.body.job;

  res.send(reg);
}
