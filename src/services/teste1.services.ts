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

  for(let i = 0; i < data.length;  i++) {
    if(data[i].name == name) {
      data[i].views! += 1;
      return data[i];
    }
  }
  
  throw new AppError("User not found", 404);
}

export const getUsersService = async (): Promise<IUser[]> => {
  return data;
}
