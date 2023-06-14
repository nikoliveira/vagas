import {
  readFromDatabase,
  saveToDatabase,
} from '../database/databaseFunctions';
import APIError from '../utils/errorClass';
import { hashPassword } from '../utils/argon2Helper';
import { CreateUser, UpdateUser, User } from './user.interface';

const getUsers = () => readFromDatabase() as unknown as User[];

const findUser = (id: number) => {
  const users = getUsers();
  const user = users.find(u => u.id === id);
  if (!user) throw new APIError('Usuário não encontrado.', 'notFound');
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

const createUser = async (data: CreateUser) => {
  const { name, job, password, isAdmin } = data;
  const users = getUsers();
  const nameAlreadyExists = users.some(user => user.name === name);

  if (nameAlreadyExists) {
    throw new APIError('Nome já cadastrado.', 'alreadyExists');
  }

  const newID = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  const hashedPassword = await hashPassword(password);
  const newUser = {
    id: newID,
    name,
    job,
    isAdmin: isAdmin || false,
    readCounter: 0,
  };

  saveToDatabase([...users, { ...newUser, password: hashedPassword }]);
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
