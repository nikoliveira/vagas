module.exports = function (req, res, next) {
    const { name, job } = req.body;
  
    if (!name && !job) {
      return res.status(400).send("Dados inválidos");
    }
    next();
  };
  