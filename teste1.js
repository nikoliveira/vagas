const data = require("./fakeData");
const searchCount = {}; // Objeto para armazenar as contagens de pesquisa por usuário

// Método para buscar um usuário através do nome passado na query.
const getUser = (req, res) => {
  try {
    const { name } = req.query;
    const user = data.find((user) => user.name === name);

    if (user) {
      if (searchCount[name]) {
        searchCount[name]++; // Incrementa a contagem de pesquisas para o usuário
      } else {
        searchCount[name] = 1; // Inicializa a contagem para o usuário
      }
      res.send(user);
    } else {
      res.status(404).send('Usuário não encontrado');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar o usuário');
  }
};

// Método para retornar todos os usuários da base.
const getUsers = (req, res) => {
  try {
    res.send({ users: data });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter os usuários');
  }
};

// Método para retornar a contagem de pesquisas do usuário.
const getUserSearchCount = (req, res) => {
  try {
    const { name } = req.query;
    const count = searchCount[name] || 0; // Obtém a contagem para o usuário ou retorna 0 se não existir contagem
    res.send(`Usuário ${name} foi lido ${count} vezes.`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter a contagem de pesquisas');
  }
};

module.exports = {
  getUser,
  getUsers,
  getUserSearchCount
};
