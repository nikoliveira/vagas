const data = require("../models/fakeData");
const getUser = (req, res, next) => {
    const name = req.query.name;

    if (!name) {
        return res.status(400).send('Não foi informado nenhum usuário.');
    }

    let searchUser = data.filter(user => user.name.includes(name));

    if (searchUser.length > 0) {
        searchUser[0].searchCount = searchUser[0].searchCount ? searchUser[0].searchCount + 1 : 1;
        res.status(200).send(searchUser);
    } else {
        res.status(404).send('Usuário informado não encontrado.');
    }
};


const getUsers = (req, res, next) => {
    res.send(data);
};

const addUser = (req, res) => {
    const name = req.body.name;
    const job = req.body.job;

    if (!name || !job) {
        return res.status(400).send('Todos os campos devem ser preenchidos.');
    }

    const newUser = {
        id: data.length + 1,
        name: name,
        job: job,
    };

    data.push(newUser);

    res.status(200).send(newUser);
};

const deleteUser = (req, res) => {
    const name = req.query.name;

    if (!name) {
        return res.status(400).send('Não foi informado nenhum usuário.');
    }

    const userIndex = data.findIndex(user => user.name.includes(name));

    if (userIndex === -1) {
        res.status(404).send('Usuário informado não encontrado.');
    } else {
        data.splice(userIndex, 1);
        res.status(200).send('sucesso');
    }
};

const updateUser = (req, res) => {
    const id = Number(req.query.id);
    const name = req.body.name;
    const job = req.body.job;

    if (!id) {
        return res.status(400).send('Não foi informado nenhum ID.');
    }

    const searchUser = data.find((user) => user.id === id);

    if (!searchUser) {
        return res.status(404).send('Usuário informado não encontrado.');
    }

    if (!name && !job) {
        return res.status(400).send('É necessário informar pelo menos uma propriedade.');
    }

    if (name) {
        searchUser.name = name;
    }

    if (job) {
        searchUser.job = job;
    }

    res.status(200).send(searchUser);
};

const getUserSearchCount = (req, res) => {
    const name = req.query.name;

    if (!name) {
        return res.status(400).send('Não foi informado nenhum usuário.');
    }

    const user = data.find(user => user.name === name);

    if (!user) {
        return res.status(404).send('Usuário informado não encontrado.');
    }

    const searchCount = user.searchCount || 0;

    res.status(200).send(`O usuário ${name} foi buscado ${searchCount} vezes.`);
};

const createPermissionsUser = (req, res, next) => {
    const name = req.query.name;
    const permissions = req.body.permissions;

    if (!name) {
        return res.status(400).send('Não foi informado nenhum usuário.');
    }

    let searchUsers = data.filter(user => user.name.includes(name));

    if (searchUsers.length === 0) {
        return res.status(404).send('Usuário informado não encontrado.');
    }

    if (!permissions || permissions.length === 0) {
        return res.status(400).send('É necessário informar pelo menos um tipo de permissão.');
    }

    const validPermissions = ['delete', 'update'];

    searchUsers.forEach(user => {
        const userPermissions = user.permissions || [];

        permissions.forEach(permission => {
            if (!userPermissions.includes(permission) && validPermissions.includes(permission)) {
                userPermissions.push(permission);
            }
        });

        user.permissions = userPermissions;
    });

    res.status(200).send(searchUsers);
};

module.exports = {
    getUser,
    getUsers,
    addUser,
    deleteUser,
    updateUser,
    getUserSearchCount,
    createPermissionsUser
}