import { IUser } from "../interfaces/user.interfaces";
import data from "../data/fakeData";
import { AppError } from "../errors/AppError";

export const getUserService = async (name: any): Promise<IUser> => {

  for(let i = 0; i < data.length;  i++) {
    if(data[i].name == name) {
      return data[i];
    }
  }
  
  throw new AppError("User not found", 404);
}

export const getUsersService = async (): Promise<IUser[]> => {
  return data;
}
