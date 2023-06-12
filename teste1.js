var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    const { name } = req.query;
    const user = data.find((user) => user.name === name);
    
    if(user) return res.status(200).json(user);

    return res.status(404).send("User not found");
};

const getUsers = ( req, res, next ) => {
    res.status(200).json(data);
};

module.exports = {
    getUser,
    getUsers
};