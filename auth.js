const data = require('./fakeData');

const verifyRole = async (req, res, next) => {

  const { name } = req.query;

  const user = data.find((eachUser) => eachUser.name === name);

  if (user.job !== 'admin') {
    return res.status(400).json({ message: "Usuário não autorizado" });
  }

  next();
}

module.exports = {
  verifyRole,
}

// Ia usar o JWT aqui, mas sinto que ele se aplicaria mais em uma camada de login, passando para as outras páginas no Header.
// Por isso implementei apenas uma função para verificar se o Job do Usuário é Admin ou não.