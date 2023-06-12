var data = require("./fakeData");

const getUser = (req, res, next) => {

  // Estou utilizando const para evitar vazamentos de escopo.
  const name = req.query.name;

  // Buscando o usuario por nome na base fake.
  const result = data.find((person) => {
    if (person.name == name) {
      return person
    }
  });

  // Caso não seja encontrado é exibida uma mensagem para o usuario.
  if (!result) {
    return res.status(404).json({ message: 'Pessoa não encontrada.' });
  }
  return res.send(result)

};

const getUsers = (req, res, next) => {

  // Com este bloco try catch caso aconteça algum erro na comunicação com o banco a aplicação
  // não vai crashar.
  try {
    res.send(data);
  } catch {
    res.status(500).json({ message: 'Internal error' });
  }

};

module.exports = {
  getUser,
  getUsers
};