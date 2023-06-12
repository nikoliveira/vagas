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
      {name, job}: IUserRequest
  ): Promise<IUser> => {
  
    let updatedUser;

  for(let i = 0; i < data.length; i++) {
    if(data[i].id == userId) {
      data[i].name = name;
      data[i].job = job;
      updatedUser = data[i];
      break
    }
  }
  
  if(updatedUser == undefined) {
    throw new AppError ("User not found", 404);
  }

  return updatedUser;
}

export default putUserService;
