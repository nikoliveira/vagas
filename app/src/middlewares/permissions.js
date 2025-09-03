const { PERMS } = require("../db/usersPermissions");

function requirePermission(permission) {
  return (req, res, next) => {
    const perms = req.user?.permissions || [];
    if (!perms.includes(permission)) {
      return res.status(403).send({
        message: "Forbidden: missing permission",
        required: permission,
      });
    }
    next();
  };
}

module.exports = { requirePermission, PERMS };
