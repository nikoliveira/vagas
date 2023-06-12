const data = require("./fakeData");
const { v4: uuidv4 } = require("uuid");

/**
 * Create a new user
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
module.exports = async function(req, res) {
  const { name, job } = req.body;

  const newUser = {
    id: uuidv4(),
    name: name,
    job: job,
  };

  data.push(newUser);

  res.send(newUser);
};
