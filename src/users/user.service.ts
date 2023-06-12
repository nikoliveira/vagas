import { readFromDatabase, saveToDatabase } from "../utils/databaseFunctions";
import { UpdateUser, User } from "./user.interface";

const findUser = (id: number) => {
  const users = getUsers();
  const user = users.find((u) => u.id === id);
  if (!user) throw new Error("Usuário não encontrado.");
  return { user, data: users };
};

const getUser = (id: number) => {
  const { user, data } = findUser(id);
  const { readCounter } = user;
  const index = data.indexOf(user);
  data[index].readCounter = readCounter ? readCounter + 1 : 1;
  saveToDatabase(data);
  return user;
};

const getUsers = () => readFromDatabase() as unknown as User[];

const createUser = (name: string, job: string) => {
  const data = getUsers();
  const newID = data[data.length - 1].id + 1;
  const newUser = {
    id: newID,
    name: name,
    job: job,
    readCounter: 0,
  };

  saveToDatabase([...data, newUser]);
  return newUser;
};

const deleteUser = (id: number) => {
  const { user, data } = findUser(id);
  const index = data.indexOf(user);
  data.splice(index, 1);
  saveToDatabase(data);
};

const updateUser = (id: number, newInfo: UpdateUser) => {
  const { user, data } = findUser(id);
  const index = data.indexOf(user);
  data[index] = { ...user, ...newInfo };
  saveToDatabase(data);
};

const countReads = (id: number) => {
  const { user } = findUser(id);
  return `Usuário ${user.name} foi lido ${user.readCounter || 0} vezes.`;
};

export default {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  countReads,
};
