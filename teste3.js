const data = require("./fakeData");

module.exports = function (req, res) {
  const id = req.query.id;

  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      data.splice(i, 1);
      return res.status(200).send({ message: "Success" });
    }
  }

  return res.status(404).send({ message: "User not found" });
};
