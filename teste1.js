const data =  require("./fakeData");

const getUser = ( req, res, _next ) => {
    
    const { name } =  req.query;

    const searchedUser = data.find((eachUser) => eachUser.name === name);

    if(!searchedUser) {
        return res.status(401).json({ message: "Usuário não encontrado" });
    }

    return res.status(200).send(searchedUser);

};

const getUsers = ( _req, res, _next ) => {
    
    res.status(200).send(data);
    
};

module.exports = {
    getUser,
    getUsers
};