const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(400).send({ error: "Token não enviado" });
  }

  const parts = authHeader.split(" ");

  if (!parts.length === 2) {
    return res.status(400).send({ error: "Erro no Token" });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(400).send({ error: "Token formato incorreto" });
  }

  //Utilização de 1 a 10 apenas para simplificar, aqui usários uma varivavél de ambiente
  jwt.verify(token, '12345678910', (err, decoded) => {
    if (err) return res.status(401).send({ error: "Token Invalido" });

    req.userId = decoded.id;
    return next();
  });
};

const isAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;

  const parts = authHeader.split(" ");

  const [_, token] = parts;

  //Utilização de 1 a 10 apenas para simplificar, aqui usários uma varivavél de ambiente
  jwt.verify(token, '12345678910', (err, decoded) => {
    if (decoded.job === "Administrador") {
      return next();
    } else {
      return res.status(401).send({ error: "Usuário não autorizado!" });
    }
  });
}

module.exports = { authMiddleware, isAdmin }