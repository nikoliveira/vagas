var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    
    var name =  req.query.name;
    
    if (!name) {
        return res.status(400).send("Name query parameter is required");
    }

    for(let i = 0; i < data.length;  i++) {
        if(data[i].name == name) {
            return res.send(data[i]);
        }
    }
    
    return res.status(404).send("User not found");

};

const getUsers = ( req, res, next ) => {
    
    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};