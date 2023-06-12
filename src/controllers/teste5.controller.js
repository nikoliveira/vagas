const teste5Services = require('../services/teste5.services');

const getUserSearchCount = (req, res) => {
  try {
    const { name } = req.query;
    const result = teste5Services.getUserSearchCount(name);
    return res.status(200).json({ message: result });
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = { getUserSearchCount };