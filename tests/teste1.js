// var data =  require("./fakeData");
import data from "../fakeData.js";

export const retrieveUser = (req, res, next) => {
  // var name = req.query.name;
  // for (let i = 0; i < data.length; i++) {
  //   if (i.name == name) {
  //     res.send(data[i]);
  //   }
  // }
};

export const getUsers = (req, res, next) => {
  res.send(data);
};
