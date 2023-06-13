let data = require("./fakeData");

module.exports = function async (req, res) {
  const { name, job } = req.body;

  let newUser = {
    name: name,
    job: job,
  };

  if (!name || !job) {
    throw console.error("Name and job must be filled");
  }

  try {
    data.push(newUser);
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
