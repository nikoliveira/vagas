const services = require("./utils/services");
const status = require("./utils/status");

module.exports =  function(req, res) {
    const { id } = req.query;
    const {name, job} = req.body;

    try {
        const user = services.updateUser(id, name, job);
        if(!user) return res.status(status.NOT_FOUND).send("User not found");
        return res.status(status.OK).json(user);
    }catch(e){
        return res.status(status.BAD_REQUEST).send(e.message);
    }
};