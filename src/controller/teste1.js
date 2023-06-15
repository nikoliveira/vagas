import data from '../database/fakeData';

export const getUserByName = (req, res, next) => {
    const { userIndex } = req;
  
    const user = data[userIndex]
  
    if (user) {
        return res.send(user);
    }
};

export const getAllUsers = (req, res, next) => {
    res.status(200).send(data);
};