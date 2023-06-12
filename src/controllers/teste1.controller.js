const teste1Services = require('../services/teste1.services');

const getUser = (req, res) => {
  try {
    const name = req.query.name;
    const result = teste1Services.getUser(name);
    if (result.length > 0) {
      return res.status(200).json(result);
    } else {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getUsers = (_req, res) => {
  try {
    const result = teste1Services.getUsers();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getUser, getUsers };