const data = require("../../fakeData");

const updateUser = (req, res, next) => {

    try {
        const params = req && req.params;
        const params_id = params && params.id;
        const body = req && req.body;

        if (!params_id) return res.status(404).json({ error: 'ID is required' });

        const has_user_id_in_data = data.find(user => user.id == params_id);

        if (!has_user_id_in_data) return res.status(404).json({ error: 'User not found' });

        const user_index = data.indexOf(has_user_id_in_data);

        if (user_index) {
            data[user_index].name = body.name || has_user_id_in_data.name;
            data[user_index].job = body.job || has_user_id_in_data.job;
        };

        res.send('User updated successfully');

    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
    }
};

module.exports = {
    updateUser
};