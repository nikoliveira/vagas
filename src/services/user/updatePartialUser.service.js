import { AppError } from "../../errors/appError.js";
import data from "../../database/fakeData.js";

export const updatePartialUserService = (userId, { name, job }) => {
  if (!userId) {
    throw new AppError(400, "userId not provided in route parameters");
  }

  const userFound = data.find((user) => user.id === userId);

  if (!userFound) {
    throw new AppError(404, "user not found");
  }

  name && (userFound.name = name);
  job && (userFound.job = job);

  return userFound;
};
