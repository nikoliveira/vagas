import fakeData from "../../database/fakeData";
import { AppError } from "../../errors/appError";
import { IUserCreate } from "../../interfaces/user";
import { v4 as uuid } from "uuid";
import * as bcrypt from "bcryptjs";

export const createUserService = async ({ name, password, job, isAdm }: IUserCreate) => {
  const findUserName = fakeData.find((user) => user.name === name);

  if (findUserName) {
    throw new AppError(400, "Username already registered!");
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  let superUser: boolean = false;

  isAdm ? (superUser = true) : (superUser = false);

  let newUser = {
    id: uuid(),
    name: name,
    password: hashedPassword,
    job: job,
    isAdm: superUser,
  };

  fakeData.push(newUser);

  let response = {
    id: newUser.id,
    name: newUser.name,
    job: newUser.job,
    isAdm: newUser.isAdm,
  };

  return response;
};
