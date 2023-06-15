const jwt = require("jsonwebtoken");

const validatePermissions = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res
      .status(401)
      .json({ error: "Token de autenticação não fornecido." });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const { permissions, role } = decoded;

    if (
      role === "admin" &&
      (permissions.includes("delete") || permissions.includes("update"))
    ) {
      next();
    } else {
      return res.status(403).json({
        error: "Permissão insuficiente para realizar a ação desejada.",
      });
    }
  } catch (error) {
    return res.status(401).json({ error: "Token de autenticação inválido." });
  }
};

module.exports = {
  validatePermissions,
};
