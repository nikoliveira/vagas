var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    const { name } = req.query;
    const index = data.findIndex((user) => user.name === name);
    
    data[index].views = data[index].views ? data[index].views + 1 : 1;

    if(index == -1) return res.status(404).send("User not found");
    
    return res.status(200).json(data[index]);    
};

const getUsers = ( req, res, next ) => {
    res.status(200).json(data);
};

module.exports = {
    getUser,
    getUsers
};