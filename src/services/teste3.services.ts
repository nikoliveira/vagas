import QueryString from "qs";
import data from "../data/fakeData";
import { AppError } from "../errors/AppError";

const deleteUserService = async (
    userId: 
      string | 
      QueryString.ParsedQs | 
      string[] | 
      QueryString.ParsedQs[] | 
      undefined
  ): Promise<void> => {

  let user;

  for(let i = 0; i < data.length;  i++) {
    if(data[i].id == userId) {
      user = data[i];
      data.splice(i, 1);
      break
    }
  }

  if(user == undefined) {
    throw new AppError("User not found", 404);
  }
}

export default deleteUserService;
