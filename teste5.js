const { getUserAccess } = require("./teste1");

module.exports = function(req, res){
    let { name } =  req.query

    if(!name){
        res.status(200).send("Name is required")
    }
    let userAccess = getUserAccess();

    res.send(`Usuário  ${name} foi lido  ${userAccess} vezes.`);

};