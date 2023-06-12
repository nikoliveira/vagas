const  data =  require("./fakeData");
const { ErrorHandler } = require("./middlewares");

module.exports =  (req, res, next) =>  {
    const {name, job } = req.body;

    const id =  Number(req.params.id);

    const user = data.find((user) => user.id == id);
    if(!user) return next(new ErrorHandler({ message: "User not found", statusCode: 404 }));
    
    user.name = name || user.name;
    user.job = job || user.job;

    res.send(user);

};