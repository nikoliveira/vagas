import { IUser, IUserRequest } from "../interfaces/user.interfaces";
import { v4 as uuidv4 } from "uuid";
import data from "../data/fakeData";
import { AppError } from "../errors/AppError";

const postUserService = async (newUserData: IUserRequest): Promise<IUser> => {
  const userExists: IUser | undefined = data.find((user) => user.username === newUserData.username);

  if (userExists !== undefined) {
    throw new AppError("Username already exists", 409);
  }

  if(newUserData.isAdm === undefined) {
    newUserData.isAdm = false;
  }

  const newUser: IUser = {
    id: uuidv4(),
    views: 0,
    ...newUserData
  };
  data.push(newUser);

  return newUser;
}

export default postUserService;
