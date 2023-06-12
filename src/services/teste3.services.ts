import QueryString from "qs";
import data from "../data/fakeData";
import { AppError } from "../errors/AppError";
import { IUser } from "../interfaces/user.interfaces";

const deleteUserService = async (
    userId: 
      string | 
      QueryString.ParsedQs | 
      string[] | 
      QueryString.ParsedQs[] | 
      undefined
  ): Promise<void> => {

  const findUser: IUser | undefined = data.find((user) => user.id == userId);

  if(!findUser) {
    throw new AppError("User not found", 404);
  }

  const indexUser: number = data.indexOf(findUser);

  data.splice(indexUser, 1);
}

export default deleteUserService;
