import * as argon2 from 'argon2';
import APIError from './errorClass';

const hashPassword = async (password: string) => {
  try {
    const hash = await argon2.hash(password);
    return hash;
  } catch (error) {
    console.log(error);
    throw new APIError('Erro ao gerar hash.', 'serverError');
  }
};

const verifyPassword = async (hash: string, password: string) => {
  try {
    const isValid = await argon2.verify(hash, password);
    return isValid;
  } catch (error) {
    console.log(error);
    throw new APIError('Erro ao verificar hash.', 'serverError');
  }
};

export { hashPassword, verifyPassword };
