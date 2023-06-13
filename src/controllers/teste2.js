const { v4: uuidv4 } = require('uuid');
const data = require("../../fakeData");


const createUser = (req, res, next) => {
    const body = req && req.body;

    const name = body && body.name;
    const job = body && body.job;

    if (!name) return res.status(404).json({ error: 'Username is required' });
    if (!job) return res.status(404).json({ error: 'Job is required' });

    try {
        const newUser = {
            id: uuidv4(),
            name: name,
            job: job,
            count_accessed: 0            
        };

        data.push(newUser);

        res.send(newUser);

    } catch (error) {
        res.status(500).json({ error: 'Could not create user' });
    }
};

module.exports = {
    createUser
};