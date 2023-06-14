import data from "../../../fakeData";
import handleAppError from "../../errors/handleAppError";
import { v4 as uuid } from "uuid";

//list all users
const getUsers = (req, res, next) => {
  try {
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

const createUser = (req, res, next) => {
  const { name, job } = req.body;

  console.log(name, job);
};

//retrieve user by id
const getUser = (req, res, next) => {
  let userId = req.params.id;
  console.log(typeof userId);

  if (!userId) {
    return next(new handleError({ statusCode: 400, message: "User ID Required!" }));
  }
  const foundUser = data.find((user) => {
    user.id === userId;
  });
  // console.log(foundUser);

  if (!foundUser) {
    return next(new handleError({ statusCode: 404, message: "User Not Found!" }));
  }

  return res.status(200).json(foundUser);
};

export { getUser, getUsers, createUser };
