const data = require("../../fakeData");
const helpers = require("../helpers/functions");

const login = (req, res, next) => {
    const { name, id } = req.body;
    const user = data.find(user => user.id === id);

    if (user) {
        return res
            .status(200)
            .json({ token: helpers.generateToken({ id: id, name: name, access_type: user.access_type }) });
    } else {
        return res.status(404).json({ error: 'User not found' });
    }
};

module.exports = {
    login
};