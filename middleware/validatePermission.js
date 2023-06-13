const dotenv = require("dotenv");
dotenv.config();

module.exports = function validadePermission(req, res, next) {
  let { password } = req.headers;
  
  if (password === process.env.PASSWORD) {
    next();
  } else {
    res.status(401).send("Access daccess, please check your password");
  }
};
