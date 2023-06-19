var data =  require("./fakeData");

module.exports = function(req, res) {
  
    const {name, id, job} =  req.query;

    let user = undefined;
    let position = -1

    data.forEach((u, idx) => {
        if((name && u.name.toLowerCase().includes(name.toLowerCase())) ||
        (id && u.id.toString() === id) ||
        (job && u.job.toLowerCase().includes(job.toLowerCase()))){
            user = u
            position = idx
        }
    })

    if (user) {
        if (position > -1) data.splice(position, 1);
        res.send("success");
    } else {
        res.status(404).send("Usuário não encontrado");
    }
};