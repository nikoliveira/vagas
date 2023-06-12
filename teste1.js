const data =  require("./fakeData");
const { ErrorHandler } = require("./middlewares");

const getUser = ( req, res, next ) => {
  const id = req.params.id;
  const user = data.find((user) => user.id === Number(id))
  if(!user) return next( new ErrorHandler({ message: "User not found", statusCode: 404 }))
  user.access++

  return res.send(user)

};
const getUsers = ( req, res ) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers
};