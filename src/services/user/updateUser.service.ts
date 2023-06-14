import fakeData from "../../database/fakeData";
import { AppError } from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/user";
import * as bcrypt from "bcryptjs";

export const updateUserService = async (id: string, { name, password, job }: IUserUpdate) => {
  if (!id) {
    throw new AppError(400, "User ID is required!");
  }

  const foundUser = fakeData.find((user) => user.id === id);

  const foundIndex = fakeData.findIndex((user) => user.id === id);

  const foundUserName = fakeData.find((user) => user.name === name);

  if (foundUserName) {
    throw new AppError(400, "Username Already Registered!");
  }

  name ? (foundUser!.name = name) : foundUser!.name;
  password ? (foundUser!.password = await bcrypt.hash(password!, 12)) : foundUser!.password;
  job ? (foundUser!.job = job) : foundUser!.job;

  fakeData.splice(foundIndex, 1, foundUser!);

  const message = "User Deleted With Success!";

  return message;
};
