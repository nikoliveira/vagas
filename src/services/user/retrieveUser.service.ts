import { AppError } from "../../errors/appError";
import fakeData from "../../database/fakeData";

export const retrieveUserService = (id: string) => {
  const foundUser = fakeData.find((user) => user.id === id);

  if (!foundUser) {
    throw new AppError(404, "User not found!");
  }

  return foundUser;
};
