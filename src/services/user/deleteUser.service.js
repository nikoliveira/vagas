import { AppError } from "../../errors/appError.js";
import data from "../../database/fakeData.js";

export const deleteUserService = (userId) => {
  if (!userId) {
    throw new AppError(400, "userId not provided in route parameters");
  }

  const userFound = data.findIndex((user) => user.id === userId);

  if (userFound === -1) {
    throw new AppError(404, "user not found");
  }

  data.splice(userFound, 1);

  return;
};
