import data from '../storage/fakeData.js';
import { findLastUserId, isNameAlreadyUsed } from '../helpers.js';

function teste2(req, res) {
    const id = findLastUserId(data) + 1;
    const name = req.body.name;
    const job = req.body.job;

    if (!name || !job) {
        return res
            .status(400)
            .send({ error: 'Parâmetros "name" e "job" são obrigatórios' });
    } else if (isNameAlreadyUsed(name, data)) {
        return res
            .status(409)
            .send({ error: `O nome "${name}" já está em uso` });
    }

    const newUser = {
        id: id,
        name: name,
        job: job,
    };

    data.push(newUser);
    return res.send(newUser);
}

export default teste2;
