import { data } from "../../database/fakeData.js";
import { AppError } from "../../errors/appError.js";
import { User } from "../../models/user.js";

export const createUserService = ({ name, job, isAdm, password }) => {
  const userAlreadyExists = data.find((user) => user.name === name);

  if (userAlreadyExists) {
    throw new AppError(409, "user already exists");
  }

  const newUser = new User({ name, job, isAdm, password });

  data.unshift(newUser);

  return newUser.info();
};
