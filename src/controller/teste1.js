import data from '../database/fakeData';

export const getUserByName = (req, res, next) => {
    const { name } = req.query;
    const user = data.find((user) => user.name === name);
    if (user) {
        return res.send(user);
    }
    res.status(404).send('Usuário não encontrado');
};

export const getAllUsers = (req, res, next) => {
    res.status(200).send(data);
};