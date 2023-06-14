import fakeData from "../../database/fakeData";
import { AppError } from "../../errors/appError";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ISession } from "../../interfaces/session";

export const createSessionService = async ({ name, password }: ISession) => {
  const foundUser = fakeData.find((user) => user.name === name);

  if (!foundUser) {
    throw new AppError(400, "Name or Password invalid!");
  }

  const pwdMatch = await bcrypt.compare(password, foundUser.password);

  if (!pwdMatch) {
    throw new AppError(400, "Name or Password invalid!");
  }

  const token = jwt.sign(
    { id: foundUser.id, name: foundUser.name, isAdm: foundUser.isAdm },
    process.env.SECRET_KEY as string,
    { expiresIn: "24h" }
  );

  return token;
};
