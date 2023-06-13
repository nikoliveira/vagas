import { v4 as uuid } from "uuid";
import { hashSync } from "bcrypt";

export const data = [
  {
    id: uuid(),
    name: "João Oliveira",
    job: "Desenvolvedor",
    password: hashSync("12345", 10),
    isAdm: true,
  },
];

export const readings = [];
