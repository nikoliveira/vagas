import { AppError } from "../../errors/appError.js";
import { data } from "../../database/fakeData.js";
import jwt from "jsonwebtoken";
import { compareSync } from "bcrypt";

export const userLoginService = ({ name, password }) => {
  if (!name || !password) {
    throw new AppError(400, "name and password fields are mandatory");
  }

  const userFound = data.find((user) => user.name === name);

  if (!userFound) {
    throw new AppError(404, "usuário ou senha incorreto");
  }

  const passwordMatch = compareSync(password, userFound.password);

  if (!passwordMatch) {
    throw new AppError(404, "usuário ou senha incorreto");
  }

  const token = jwt.sign(
    { id: userFound.id, name: userFound.name },
    process.env.SECRET_KEY,
    { expiresIn: "24h" }
  );

  const response = {
    token,
    user: userFound,
  };

  return response;
};
