module.exports = (req, res, next) => {
  // Obtenha o token do cabeçalho Authorization
  const token = req.headers.authorization;

  // Verifique se o token está presente
  if (!token) {
    return res.status(401).json({ mensagem: 'Token de autenticação não fornecido' });
  }

  // Verifique se o token começa com "Bearer "
  if (!token.startsWith('Bearer ')) {
    return res.status(401).json({ mensagem: 'Formato inválido do token de autenticação' });
  }

  // Extraia o valor do token (removendo "Bearer " do início)
  const tokenValor = token.substring(7);

  // Realize a validação do token (por exemplo, verificar se é válido ou comparar com um valor esperado)
  if (tokenValor !== 'TOKEN_DE_VALIDACAO') {
    return res.status(401).json({ mensagem: 'Token de autenticação inválido' });
  }

  // O token é válido, passe para o próximo middleware ou rota
  next();
};