const db = require("../database/db.json").users;
const jwt = require("jsonwebtoken");

function generateToken(params = {}) {
  //Utilização de 1 a 10 apenas para simplificar, aqui usariamos uma varivavél de ambiente
  return jwt.sign(params, '12345678910', {
    expiresIn: 86400,
  });
}

const LoginUser = (req, res) => {
  const { name, id } = req.body
  const user = db.find(user => user.id === id);
  if (user) {
    return res
      .status(200)
      .json({ token: generateToken({ id: id, name: name, job: user.job }) });
  } else {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }
};

module.exports = {
  LoginUser
};
