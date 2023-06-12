// middleware abaixo recebe o token via chave authorization dos headers da requisição e verifica o mesmo.
module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || token.length < 10) {
    return res.status(401).json({ message: 'Token incorrect or not found' });
  }
  return next();
};
