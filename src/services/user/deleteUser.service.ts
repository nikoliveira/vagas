import fakeData from "../../database/fakeData";
import { AppError } from "../../errors/appError";

export const deleteUserService = (id: string) => {
  if (!id) {
    throw new AppError(400, "User ID is required!");
  }

  const foundIndex = fakeData.findIndex((user) => user.id === id);

  fakeData.splice(foundIndex, 1);

  const message = "User Deleted With Success!";

  return message;
};
