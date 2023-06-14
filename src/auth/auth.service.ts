import userService from '../users/user.service';
import APIError from '../utils/errorClass';
import { sign } from '../utils/jwtHelper';
import { Creditentials } from './auth.interface';
import { verifyPassword } from '../utils/argon2Helper';

const login = async (credentials: Creditentials) => {
  const { name, password } = credentials;
  const data =  userService.getUsers();
  const user = data.find((user) => user.name === name);

  if (!user) {
    throw new APIError('Usuário não encontrado.', "notFound");
  }

  const passwordIsValid = await verifyPassword(user.password, password);

  if (!passwordIsValid) {
    throw new APIError('Nome ou senha incorretos.', "unauthorized");
  }

  const payload = {
    id: user.id,
    isAdmin: user.isAdmin || false,
  };

  const token = sign(payload);
  return token;
};

export default {
    login,
};
