import data from '../database/fakeData';

export const getUserReadCount = (req, res, next) => {
  const { name } = req.query;
  const user = data.find((user) => user.name === name);
  if (user) {
    return res.send(`Usuário ${name} foi lido ${user.readCount} vezes.`);
  }
  res.status(404).send('Usuário não encontrado');
};

export const incrementUserReadCount = (req, res, next) => {
  const { name } = req.query;
  const user = data.find((user) => user.name === name);
  if (user) {

    user.readCount += 1;
  
    return res.status(200).send(`Contador de leituras de ${name} incrementado com sucesso.`);
  }
  res.status(404).send('Usuário não encontrado');
};
