const services = require("./utils/services");
const status = require("./utils/status");

module.exports = function(req, res) {
    const { name } = req.body;

    try {
        const deleted = services.deleteUser(name);
        if(!deleted) return res.status(status.NOT_FOUND).send("User not found");
        return res.status(status.OK).send(deleted);
    }catch(e){
        return res.status(status.BAD_REQUEST).send(e.message);
    }
};