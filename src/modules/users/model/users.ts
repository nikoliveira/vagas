export default class User {
  id: number;
  name: string;
  job: string;

  constructor(id: number, name: string, job: string) {
    this.id = id;
    this.name = name;
    this.job = job;
  }
}