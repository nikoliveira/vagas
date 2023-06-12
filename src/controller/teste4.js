import data from '../database/fakeData';

export const updateUser = (req, res, next) => {
    const { name, job } = req.query;
    const newData  = { name, job} ;
    

    const userIndex = data.findIndex((user) => user.name === name);
    if (userIndex !== -1) {
        data[userIndex] = newData;
     
        return res.status(200).send(newData);
    }
    res.status(404).send('Usuário não encontrado');
};
