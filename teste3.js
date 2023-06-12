const data = require('./fakeData');
const permissions = require('./permissions');

/**
 * Delete a user by ID
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
const deleteUsers = (req, res) => {
  const id = req.params.id;

  const userIndex = data.findIndex((item) => item.id === id);

  if (userIndex !== -1) {
    if (permissions.canDeleteUsers) {
      data.splice(userIndex, 1);
      res.send('success');
    } else {
      res.status(403).send('Permissão negada');
    }
  } else {
    res.status(404).send('User not found');
  }
};

module.exports = {
  deleteUsers,
};
