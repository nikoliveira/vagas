const data = require("./fakeData");

class ErrorHandler extends Error {
  constructor({ statusCode, message }) {
    super();
    this.message = message;
    this.statusCode = statusCode || 500;
  }
}
 
const handleError = (err, res ) => {
  const { statusCode, message } = err;
  res.status(statusCode || 500).json({
    status: "error",
    statusCode: statusCode || 500,
    message,
  });
};

const authenticate = (req, res, next) => {
  const id = Number(req.headers.auth)
  const user = data.find((user) => user.id === id)
  if(!user.isAdmin) return next(new ErrorHandler({ message: "User in header auth is not authorized", statusCode: 401}))

  next()
}


module.exports = {
  ErrorHandler,
  handleError,
  authenticate
}