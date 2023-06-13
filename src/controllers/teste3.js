const data = require("../../fakeData");

const deleteUser = (req, res, next) => {

    try {
        const params = req && req.params;
        const params_id = params && params.id;

        if (!params_id) return res.status(404).json({ error: 'ID is required' });

        const has_user_id_in_data = data.find(user => {
            if (user.id == params_id) {
                const findIndexUser = data.indexOf(user);
                
                if (findIndexUser) data.splice(findIndexUser, 1);
            }
            return user.id == params_id;
        });

        if (!has_user_id_in_data) return res.status(404).json({ error: 'User not found' });

        res.send('User deleted successfully');

    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
};

module.exports = {
    deleteUser
};