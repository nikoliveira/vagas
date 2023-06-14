import { IDatabaseUser } from "../interfaces/database";

export const readingsCounter = [];

const fakeData: IDatabaseUser[] = [
  {
    id: "1",
    name: "João Oliveira",
    password: "1234",
    job: "Desenvolvedor",
    isAdm: false,
  },
  {
    id: "2",
    name: "Ohana",
    password: "1234",
    job: "seller",
    isAdm: true,
  },
];

export default fakeData;
