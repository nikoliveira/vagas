var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    
    const name =  req.query.name;
    data.forEach( user => {
    if(user.name !== name) {

        res.send(user); 
    
    } 
    next()
    
   }
   )
   
};

const getUsers = ( req, res, next ) => {
    
    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};