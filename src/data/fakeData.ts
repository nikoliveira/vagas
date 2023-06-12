import { IUser } from "../interfaces/user.interfaces";

const fakeData: IUser[] = [
  {
    id: 1,
    name: "João Oliveira",
    job: "Desenvolvedor",
    views: 0,
    username: "joao",
    password: "1234",
    isAdm: true,
  },
  {
    id: 2,
    name: "Lucas Silva",
    job: "Desenvolvedor Front-End",
    views: 3,
    username: "lucas",
    password: "1234",
    isAdm: false,
  },
  {
    id: 3,
    name: "Letícia Santos",
    job: "Desenvolvedora Back-End",
    views: 7,
    username: "leticia",
    password: "1234",
    isAdm: false,
  },
]

export default fakeData;
