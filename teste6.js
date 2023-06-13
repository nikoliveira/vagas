const jwt = require("jsonwebtoken");

const validatePermissions = (req, res, next) => {
  // Verifica se o token JWT é fornecido no cabeçalho da requisição
  const token = req.headers["authorization"];
  if (!token) {
    return res
      .status(401)
      .json({ error: "Token de autenticação não fornecido." });
  }

  try {
    // Verifica a validade do token e decodifica o payload
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const { permissions, role } = decoded;

    // Verifica se o usuário é admin e possui a permissão de delete ou update
    if (
      role === "admin" &&
      (permissions.includes("delete") || permissions.includes("update"))
    ) {
      // Permite que a requisição prossiga
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
