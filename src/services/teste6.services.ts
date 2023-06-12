import { ILogin, IUser } from "../interfaces/user.interfaces";
import data from "../data/fakeData";
import { AppError } from "../errors/AppError";
import jwt from "jsonwebtoken";
import "dotenv/config";

const loginService = async ({username, password}: ILogin): Promise<string> => {

  if(!username) {
    throw new AppError("Username is required");
  }

  const user: IUser | undefined = data.find(user => user.username === username);

  if(!user) {
    throw new AppError("User not found", 404);
  }

  const passwordMatch = password === user.password;

  if (!passwordMatch) {
    throw new AppError("Invalid username or password", 403);
  }

  const token = jwt.sign({
    isAdm: user.isAdm,
  }, process.env.SECRET_KEY as string, {
    expiresIn: "24h",
    subject: user.username
  });

  return token;
}

export default loginService;
