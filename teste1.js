var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    const { name, id, job } = req.query;

    // Buscar o usuário com base no nome, id ou job
    const user = data.find((user) => {
        return (
        (name && user.name.toLowerCase().includes(name.toLowerCase())) ||
        (id && user.id.toString() === id) ||
        (job && user.job.toLowerCase().includes(job.toLowerCase()))
        );
    });

    if (user) {
        res.send(user);
    } else {
        res.status(404).send("Usuário não encontrado");
    }
};

const getUsers = ( req, res, next ) => {
    res.send(data);
};

module.exports = {
    getUser,
    getUsers
};