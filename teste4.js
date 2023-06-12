const data = require('./fakeData');
const permissions = require('./permissions');

/**
 * Update a user by ID
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
const updateUsers = (req, res) => {
  const id = req.query.id;

  const userIndex = data.findIndex((item) => item.id === id);

  if (userIndex !== -1) {
    if (permissions.canUpdateUsers) {
      // Update the user's name and job
      data[userIndex].name = req.body.name;
      data[userIndex].job = req.body.job;
  
      res.send(data[userIndex]); // Send the updated user object
    } else {
      res.status(403).send('Permissão negada'); // Permission denied
    }
  } else {
    res.status(404).send('User not found'); // User not found
  }
};

module.exports = {
  updateUsers,
};
