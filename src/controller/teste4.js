import data from '../database/fakeData';

export const updateUser = (req, res, next) => {
    
    const { name, job } = req.body;
    const {editName} = req.query;

    const userIndex = data.findIndex(user => user.name === editName)

    if (userIndex < 0) return res.status(404).send('Usuário deletado');

    const newData = { name, job };

    data[userIndex] = {...data[userIndex],name, job}

        return res.status(200).send(data[userIndex]);
};