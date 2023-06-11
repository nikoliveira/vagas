const data = require("./fakeData");

const addUser = (req, res) => {
    const name = req.body.name;
    const job = req.body.job;

    if (!name || !job) {
        return res.status(400).send('Todos os campos devem ser preenchidos.');
    }

    const newUser = {
        id: data.length + 1,
        name: name,
        job: job,
    };

    data.push(newUser);

    res.status(200).send(newUser);
};

module.exports = addUser;
