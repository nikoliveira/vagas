const data = require("../db/fake");
const { usersPermissions } = require("../db/usersPermissions");

function auth(req, res, next) {
  const idHeader = req.header("x-user-id");
  const userId = parseInt(idHeader, 10);

  if (!userId) {
    return res.status(401).send({ message: "Missing header: x-user-id" });
  }

  const user = data.find((u) => u.id === userId);
  if (!user) {
    return res.status(401).send({ message: "User not found for x-user-id" });
  }

  req.user = {
    ...user,
    permissions: usersPermissions[userId] || [],
  };

  return next();
}

module.exports = { auth };
