import data from '../database/fakeData';

export const deleteUser = (req, res, next) => {
   
    const {editName} = req.query;

    const userIndex = data.findIndex(user => user.name === editName)

    if (userIndex < 0) return res.status(404).send('Usuário não encontrado');

        data.splice(userIndex, 1);
        return res.status(200).send('Usuário deletado');
};