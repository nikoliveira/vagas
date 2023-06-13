const services = require("./utils/services");
const status = require("./utils/status");

const getUser = ( req, res ) => {
    const { name } = req.query;

    try {
        const user = services.getUserByUsername(name);
        if(!user) res.status(status.NOT_FOUND).send("User not found");

        services.updateUserViewCount(name);
        return res.status(status.OK).json(user);
    }catch(e){
        return res.status(status.BAD_REQUEST).send(e.message)
    }
};

const getUsers = ( req, res ) => {
    res.status(status.OK).json(services.getAllUsers());
};

module.exports = {
    getUser,
    getUsers
};