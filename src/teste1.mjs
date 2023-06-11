import { fakeData } from './src/fakeData.mjs';

export const getUser = (req, res, next) => {
  const name = req.query.name;
  const user = fakeData.find((item) => item.name === name);

  if (user) {
    user.count++;
    res.send({ user });
  } else {
    res.status(404).send('Usuário não encontrado.');
  }
};

export const getUsers = (req, res, next) => {
  res.send(fakeData);
};

export const findByName = (name) => {
  for (const user of fakeData) {
    if (user.name.toLowerCase() === name.toLowerCase()) {
      return user;
    }
  }
};