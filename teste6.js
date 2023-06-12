const data = require("./fakeData");

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

module.exports = createPermissionsUser;