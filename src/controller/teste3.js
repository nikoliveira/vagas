import data from '../database/fakeData';


export const deleteUser = (req, res, next) => {
    const { name } = req.query;
    const userIndex = data.findIndex((user) => user.name === name);
    if (userIndex !== -1) {
        data.splice(userIndex, 1);
        return res.status(200).send('Usuário excluído com sucesso');
    }
    res.status(404).send('Usuário não encontrado');
};