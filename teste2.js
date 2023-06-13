const services = require("./utils/services");
const status = require("./utils/status");

module.exports = function(req, res){
    const { name, job, features } = req.body;

    try {
        return res.status(status.CREATED).json(services.createUser(name, job, features));
    }catch(e){
        return res.status(status.BAD_REQUEST).send(e.message);
    }
};