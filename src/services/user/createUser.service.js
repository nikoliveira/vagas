import { data } from "../../database/fakeData.js";
import { User } from "../../models/user.js";

export const createUserService = ({ name, job, isAdm, password }) => {
  const newUser = new User({ name, job, isAdm, password });

  data.push(newUser);

  return newUser.info();
};
