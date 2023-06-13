const data =  require("./fakeData");
const { verifyRole } = require("./auth");

module.exports = function(req, res, next) {

    verifyRole(req, res, next);
  
    const { name } =  req.query;

    const filteredData = data.filter((eachUser) => eachUser.name !== name);
    const findDeletedUser = data.some((eachUser) => eachUser.name === name);

    if (!findDeletedUser) {
        data = filteredData;
        return res.status(200).json({ message: "success" });
    } else {
        return res.status(409).json({ message: "Failed" })
    };
};