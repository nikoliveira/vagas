// var data = require("./fakeData");
import data from "./fakeData.js";

export function deleteUser(req, res) {
  var name = req.query.name;

  for (let i = 0; i < data.length; i++) {
    if (i.name == name) {
      data[i] = null;
    }
  }

  res.send("success");
}
