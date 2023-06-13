const data = require("../../fakeData");
const helpers = require("../helpers/functions");

const getHowManyUserAccess = (req, res, next) => {

    const query = req && req.query;
    const name = query && query.name;

    if (!name) return res.status(404).json({ error: 'Username is required.' });

    try {
        const user = data.find(user_data => {
            const user_name = helpers.removeSpecialCharacters(user_data.name);
            const query_name = helpers.removeSpecialCharacters(name);

            return user_name == query_name;
        });

        if (!user) return res.status(404).json({ error: 'User not found.' });

        res.send(`Usuário ${name} foi lido ${user.count_accessed || 0} vezes.`);

    } catch (error) {
        res.status(500).json({ error: 'Failed to search for the count by the user.' });
    }


};

module.exports = {
    getHowManyUserAccess
};