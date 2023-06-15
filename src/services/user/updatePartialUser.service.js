import { AppError } from "../../errors/appError.js";
import { data as database } from "../../database/fakeData.js";

export const updatePartialUserService = (userId, data) => {
  if (!userId) {
    throw new AppError(400, "userId not provided in route parameters");
  }

  const userFound = database.find((user) => user.id === userId);

  if (!userFound) {
    throw new AppError(404, "user not found");
  }

  userFound.update(data);

  return userFound.info();
};
