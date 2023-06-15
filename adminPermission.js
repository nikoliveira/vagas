const data = require("./fakeData");

module.exports = function adminPermission(req, res, next) {
  const adminId = req.body.adminId;

  const user = data.find((user) => user.id === adminId);

  if (!user?.admin)
    return res
      .status(403)
      .send({ message: "This action needs admin permission." });

  next();
};
