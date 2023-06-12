import { IUser, IUserRequest } from "../interfaces/user.interfaces";
import data from "../data/fakeData";
import { AppError } from "../errors/AppError";
import QueryString from "qs";

const putUserService = async (
    userId: 
      string | 
      QueryString.ParsedQs | 
      string[] | 
      QueryString.ParsedQs[] | 
      undefined, 
      {name, job, username, password}: IUserRequest
  ): Promise<IUser> => {
  
  let findUser: IUser | undefined = data.find((user) => user.id == userId);

  if(!findUser) {
    throw new AppError("User not found", 404);
  }
  
  findUser.name = name;
  findUser.job = job;
  findUser.username = username;
  findUser.password = password;

  const updatedUser: IUser = findUser;

  return updatedUser;
}

export default putUserService;
