const data = require('./fakeData');

/**
 * Get user by ID
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 */
const getUser = (req, res, next) => {
  const id = req.body.id;

  const user = data.find((item) => item.id === id);

  if (user) {
    res.send(user);
  } else {
    res.status(404).send('User not found');
  }
};

/**
 * Get all users
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 */
const getUsers = (req, res, next) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
