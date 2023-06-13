const data = require("../../fakeData");
const helpers = require("../helpers/functions");

const getUser = (req, res, next) => {

    const query = req && req.query;
    const name = query && query.name;

    if (!name) return res.status(404).json({ error: 'Username is required' });

    try {
        const user = data.find(user_data => {
            const user_name = helpers.removeSpecialCharacters(user_data.name);
            const query_name = helpers.removeSpecialCharacters(name);
            
            return user_name == query_name;
        });

        if (!user) return res.status(404).json({ error: 'User not found' });

        user.count_accessed = (user.count_accessed || 0) + 1;

        res.send(user);

    } catch (error) {
        res.status(500).json({ error: 'User search failed' });
    }
};

const getUsers = (req, res, next) => {

    res.send(data);

};

module.exports = {
    getUser,
    getUsers
};