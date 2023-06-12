const data =  require("./fakeData");
const { ErrorHandler } = require("./middlewares");

module.exports = (req, res,next) => {
  const {name, job, isAdmin} = req.body;
  if(!name || !job) return next(new ErrorHandler({ message: "invalid name or job" }));
  const newUser = {
    id: data.length + 1,
    name: name,
    job: job,
    access: 0,
    isAdmin: isAdmin || false
  }

  data.push(newUser)
  
  res.send(newUser);

};