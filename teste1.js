var data =  require("./fakeData");
var contador = require("./contador");

const getUser = ( req, res, next ) => {
    
    var name =  req.query.name;

    // for(let i = 0; i < data.length;  i++) {
    //     if(i.name == name) {
    //         res.send(data[i]);
    //     }
    // }

    var user = data.find(u => u.name === name);
    contador(user);
    res.send(user);
};

const getUsers = ( req, res, next ) => {
    
    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};