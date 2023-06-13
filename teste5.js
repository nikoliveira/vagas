const services = require("./utils/services");
const status = require("./utils/status");

module.exports = function(req, res){
    var { name } =  req.query;
    try {
        const user = services.getUserByUsername(name);
        if(!user) return res.status(status.NOT_FOUND).send("User not found");

        return res.status(status.OK).send(`Usuário ${user.name} foi lido ${user.views} vezes.`)
    }catch(e){
        return res.status(status.BAD_REQUEST).send(e.message)
    }
};