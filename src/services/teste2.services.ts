import { IUser, IUserRequest } from "../interfaces/user.interfaces";
import { v4 as uuidv4 } from "uuid";
import data from "../data/fakeData";

const postUserService = async (newUserData: IUserRequest): Promise<IUser> => {
  const newUser: IUser = {
    id: uuidv4(),
    views: 0,
    ...newUserData
  };
  data.push(newUser);

  return newUser;
}

export default postUserService;
