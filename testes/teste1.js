import data from '../storage/fakeData.js';
import { registerUserVisit } from '../helpers.js';

export function getUser(req, res) {
    const name = req.query.name;
    if (!name) {
        return res
            .status(400)
            .send({ error: 'parâmetro "nome" é obrigatório' });
    }

    const user = data.find((user) => user.name === name);

    if (!user) {
        return res
            .status(404)
            .send({ error: `Usuário "${name}" não encontrado` });
    }

    registerUserVisit(name);

    return res.send(user);
}

export function getUsers(_, res) {
    return res.send(data);
}
