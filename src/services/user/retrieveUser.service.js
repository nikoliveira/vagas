import data from "../../database/fakeData.js";
import { AppError } from "../../errors/appError.js";

export const retrieveUserService = (userId) => {
  if (!userId) {
    throw new AppError(400, "userId not provided in route parameters");
  }

  const userFound = data.find((user) => user.id === userId);

  if (!userFound) {
    throw new AppError(404, "user not found");
  }

  return userFound;
};
