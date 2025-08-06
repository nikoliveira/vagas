var data = require("./fakeData");

module.exports = function(req, res){
    
    const { name, job } = req.body;

    if (!name || !job) {
        return res.status(400).send({
            message: "Nome e cargo são campos obrigatórios."
        });
    }

    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;

    const newUser = {
        id: newId,
        name: name,
        job: job,
    };

    data.push(newUser);

    res.status(201).send(newUser);
};