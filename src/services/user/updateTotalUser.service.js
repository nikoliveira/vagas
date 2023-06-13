import { AppError } from "../../errors/appError.js";
import data from "../../database/fakeData.js";

export const updateTotalUserService = (userId, { name, job }) => {
  if (!userId) {
    throw new AppError(400, "userId not provided in route parameters");
  }

  const userFound = data.find((user) => user.id === userId);

  if (!userFound) {
    throw new AppError(404, "user not found");
  }

  userFound.name = name;
  userFound.job = job;

  return userFound;
};
