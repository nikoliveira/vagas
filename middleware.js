const UserValidation = async (req, res, next) => {
  const chave = req.headers.key;

  if (chave === "qwaazwsde") next();
  else return res.send({ message: "Usuário não autenticado" });
};

module.exports = UserValidation;
