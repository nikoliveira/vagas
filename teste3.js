const data =  require("./fakeData");
const { ErrorHandler } = require("./middlewares");

module.exports = (req, res, next) => {
  const id = Number(req.params.id);
  const userIndex = data.findIndex((user) => user.id == id);
  if(userIndex == -1) {
    return next(new ErrorHandler({message: "user not found", statusCode: 404}))
  }
  data.splice(userIndex, 1)


  return res.sendStatus(204);

};