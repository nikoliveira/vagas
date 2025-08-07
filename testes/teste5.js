import fakeCache from '../storage/fakeCache.js';

function teste5(req, res) {
    const name = req.query.name;

    if (!name) {
        return res
            .status(400)
            .send({ error: 'Parâmetro "name" é obrigatório' });
    } else if (!(name in fakeCache.visits)) {
        return res
            .status(404)
            .send({ error: `Usuário "${name}" não encontrado` });
    }

    return res.send({
        message:
            'Usuário ' +
            name +
            ' foi lido ' +
            fakeCache.visits[name] +
            ' vezes',
    });
}

export default teste5;
