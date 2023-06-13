const data =  require("./fakeData");
const { verifyRole } = require("./auth");

module.exports =  function(req, res, next) {

    verifyRole(req, res, next);
  
    const  { id } =  req.query;
    const { name, job } = req.body;

    const findUser = data.some((eachUser) => eachUser.id === id);

    if (!findUser) {
       return res.status(400).json({ message: "User not found!"});
    }

    const indexUser = data.indexOf(id);

    const updatedUser = {
        id,
        name,
        job,
    };
    
    data[indexUser] = updatedUser;

    res.status(200).json(updatedUser);

};