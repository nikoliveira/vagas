import QueryString from "qs";
import data from "../data/fakeData";
import { IUser } from "../interfaces/user.interfaces";
import { AppError } from "../errors/AppError";

const countUserService = async (
  name: 
    string | 
    QueryString.ParsedQs | 
    string[] | 
    QueryString.ParsedQs[] | 
    undefined
  ): Promise<number | undefined> => {
  
  if(!name) {
    throw new AppError("Name is required");
  }
  
  const user: IUser | undefined = data.find(user => user.name == name);

  if(!user) {
    throw new AppError("User not found", 404);
  }

  return user!.views;
}

export default countUserService;
