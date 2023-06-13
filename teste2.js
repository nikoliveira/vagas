const data =  require("./fakeData");

module.exports = function(req, res){
  
    const { name, job } =  req.body;
    
    const newUser = {
        id: data.length,
        name,
        job,
    };

    const findUser = data.some((eachUser) => eachUser.name === name && eachUser.job === job);

    if (findUser) {
        return res.status(409).json({ message: "Usuário já cadastrado" });
    };

    data.push(newUser);

    res.status(200).send(newUser)

};