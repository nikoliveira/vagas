import { IUser } from "../interfaces/user.interfaces";
import data from "../data/fakeData";
import { AppError } from "../errors/AppError";
import QueryString from "qs";

export const getUserService = async (
    name: 
      string | 
      QueryString.ParsedQs | 
      string[] | 
      QueryString.ParsedQs[] | 
      undefined
  ): Promise<IUser> => {
  
  if(!name) {
    throw new AppError("Name is required");
  }

  const findUser: IUser | undefined = data.find((user) => user.name === name);

  if(!findUser) {
    throw new AppError("User not found", 404);
  }

  findUser.views! += 1;

  return findUser;
}

export const getUsersService = async (): Promise<IUser[]> => {
  return data;
}
