module.exports = (req, res, next) => {
  const token = req.header('Authorization');
  // Aqui estou validando se o header da requisição vem com a autenticação de administrador.
  // Esta autenticação pode ficar muito mais segura com o uso do JWT token.
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  // No header a chave token tem que vir exatamente "admin" para que a operação seja realizada.
  if(token !== '"admin"') {
    return res.status(400).json({ message: 'Voce não tem autorização para esta operação.' });
  }
  return next();
};