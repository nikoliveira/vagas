import data from '../database/fakeData';

let nextUserId = 1;

export const addUser = (req, res, next) => {
    const { name, job } = req.query;

    if (!name || !job) {
        return res.status(400).json({ error: 'Name and job are required.' });
    }

    const newUser = {
        id: nextUserId++,
        name,
        job,
        readCount: 0, 
    };

    data.push(newUser);

    res.status(201).json(newUser);
};