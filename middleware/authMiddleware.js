var data =  require("../fakeData");
var jwt = require("jsonwebtoken");

module.exports = function(req, res, next){

  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ message: 'Usuário não autorizado' });
  
  const token = authorization.replace('Bearer', '').trim();

  try {
    const validPassword = process.env.VALID_PASSWORD;

    const data = jwt.verify(token, validPassword);
  

    console.log('data: ', data)

    //const { id } = data
    //req.userId = id;
    return next();

  } catch (error) {
    res.status(401).json({ message: 'Usuário não autorizado' });
  }
  
}