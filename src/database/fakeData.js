import { User } from "../models/user.js";

const initialUser = {
  name: "João Oliveira",
  job: "Desenvolvedor",
  password: "12345",
  isAdm: true,
};

export const data = [new User(initialUser)];

export const readings = [];
