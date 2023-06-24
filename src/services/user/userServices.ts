import fakeData, { Counter } from "../../databases/fakeData";
import { IUserCreate } from "../../interfaces/user/IUserCreate";
import * as bcryptjs from "bcryptjs";
import { v4 as uuid } from "uuid";
import { AppError } from "../../handlers/errors/appError";
import * as fs from "fs";
import { IUser } from "src/interfaces/user/IUser";

export const createUserService = async ({
  name,
  password,
  isAdmin,
  job,
}: IUserCreate) => {
  const userName = fakeData.find((user) => user.name === name);
  const hashPassword = await bcryptjs.hash(password, 10);
  let userAdmin: boolean = false;
  isAdmin ? (userAdmin = true) : (userAdmin = false);
  if (userName) {
    throw new AppError("Username already exists", 400);
  }

  if (!name || !password || !job || !isAdmin === undefined) {
    throw new AppError(
      "Error 400: Bad Request. Description: Missing parameters",
      400
    );
  }
  // create user object based on IUser interface
  let user : IUser = {
    id: uuid(),
    name: name,
    password: hashPassword,
    isAdmin: userAdmin,
    job: job,
  };
  fakeData.push(user);

  const newUser = {
    id: user.id,
    name: user.name,
    password: user.password,
    isAdmin: user.isAdmin,
    job: user.job,
  }
  // convert in json object
  const usertojson = JSON.stringify(newUser);

  // save data in json file
  fs.appendFile(
    "./src/databases/fakeData.json",
    `${usertojson}\n`,
    (err: any) => {
      if (err) {
        console.log("Error to save data:", err);
      }else{
        console.log("Data saved successfully")
      }
    }
  );

  //custom response for not return password (this security question)

  let response = {
    id: user.id,
    name: user.name,
    isAdmin: user.isAdmin,
    job: user.job,
  };
  return response;
};

export const listUserService = () => {
  const users = fakeData;
  const usersList = users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      isAdmin: user.isAdmin,
      job: user.job,
    };
  });
  return usersList;
};

export const updateUserService = async (id: string, {
  name,
  password,
  job,
  isAdmin,
}: IUserCreate) => {
  const index = fakeData.findIndex((user) => user.id === id);
  const userId = fakeData.find((user) => user.id === id);
  const userName = fakeData.find((user) => user.name === name);

  if (!userId) {
    throw new AppError("User not found", 404);
  }
  if (userName) {
    throw new AppError("Username already exists", 400);
  }

  name ? (userId.name = name) : (userId.name = userId.name);
  password ? (userId.password = password) : (userId.password = userId.password);
  job ? (userId.job = job) : (userId.job = userId.job);
  // we can't change the admin status of the first user
  isAdmin ? (userId.isAdmin = isAdmin) : (userId.isAdmin = userId.isAdmin);
  //index: number, deleteCount: number, ...items: IUser[]
  fakeData.splice(index, 1, userId);
};

export const deleteUserService = (id: string) => {
  const userId = fakeData.find((user) => user.id === id);

  if (!userId) {
    throw new AppError("User not found", 404);
  }
  const index = fakeData.findIndex((user) => user.id === id);

  fakeData.splice(index, 1);
  return {
    code: 200,
    message: `User ${id} deleted successfully`,
  };
};

export const counterService = (id: string) => {
  const user = fakeData.find((user) => user.id === id);
  // Fixes TypeError: Cannot read properties of undefined counter
  let user_counter = Counter.find((counter) => counter.id === id);

  if (!user) {
    throw new AppError("User not found", 404);
  } else if (!user_counter) {
    user_counter = {
      id: user.id,
      counter: 0, //increment counter
    };
    // About let use in https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-declarations
    Counter.push(user_counter);
  }

  user_counter!.counter++;

  return {
    id: user.id,
    name: user.name,
    job: user.job,
    isAdmin: user.isAdmin
  };
};

export const userCounterService = (id: string) => {
  const user = fakeData.find((user) => user.id === id);
  const userCounter = Counter.find((counter) => counter.id === id);
  var counterMessage: string = ``;
  if (!user) {
    throw new AppError("User not found", 404);
  } else if (!userCounter) {
    let userCounter = {
      id: user.id,
      counter: 0,
    };
    Counter.push(userCounter);
    // if create with const the value is fixed
    // variable the value is not fixed
    var counterMessage = `The user id ${user.id} with name ${user.name} have ${userCounter.counter} views`;
    return counterMessage;
  }
    counterMessage = `The user id ${user.id} with name ${user.name} have ${userCounter.counter} views`;
    return counterMessage;
};
