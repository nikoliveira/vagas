// var data =  require("./fakeData");
import data from "./fakeData.js";

const getUser = (req, res, next) => {
  var name = req.query.name;

  for (let i = 0; i < data.length; i++) {
    if (i.name == name) {
      res.send(data[i]);
    }
  }
};

const getUsers = (req, res, next) => {
  res.send(data);
};

export { getUser, getUsers };
