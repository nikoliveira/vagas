import data from '../storage/fakeData.js';

function teste3(req, res) {
    if (!req.permissions.canDelete) {
        return res.status(403).send({ error: 'Sem permissão' });
    }

    const name = req.query.name;
    if (!name) {
        return res
            .status(400)
            .send({ error: 'Parâmetro "name" é obrigatório' });
    }

    const userIndex = data.findIndex((user) => user.name === name);
    const deletedUser = data.splice(userIndex, 1)[0];

    if (!deletedUser) {
        return res
            .status(404)
            .send({ error: `Usuário "${name}" não encontrado` });
    }

    return res.send({
        message: 'success',
        user: deletedUser,
    });
}

export default teste3;
