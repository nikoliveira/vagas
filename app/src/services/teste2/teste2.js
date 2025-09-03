const { data } = require("../../db/fake");

/*
 *
 *  POST em /users, descubra a intenção dele e o corrija.
 *
 */

module.exports = function (req, res) {
  const { name, job } = req.body;

  const newUser = { name, job };

  data.push(newUser);

  return res.status(201).send(newUser);
};
