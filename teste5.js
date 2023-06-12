const data = require("./fakeData");
const { ErrorHandler } = require("./middlewares");


module.exports = (req, res,next ) => {
  const id = Number(req.params.id)
  const user = data.find((user) => user.id === id)

  if(!user) return next(new ErrorHandler({ message: "User not found", statusCode: 404 }))

  res.send(`Usuário ${user.name} foi lido ${user.access}  vezes.`);

};