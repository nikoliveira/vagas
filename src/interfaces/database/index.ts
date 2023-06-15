export interface IDatabaseUser {
  id: string;
  name: string;
  password: string;
  job: string;
  isAdm?: boolean;
}

export interface IReadCounter {
  id: string;
  counter: number;
}
