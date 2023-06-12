const data = require('./fakeData');

/**
 * Get user read count by name
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
module.exports = function (req, res) {
  const name = req.query.name;

  const user = data.find((item) => item.name === name);

  if (user) {
    if (!user.readCount) {
      user.readCount = 1; // Initialize read count if not present
    } else {
      user.readCount++; // Increment read count
    }

    res.send(`Usuário ${name} foi lido ${user.readCount} vezes.`); // Send response with read count
  } else {
    res.status(404).send('User not found'); // User not found
  }
};
