export default class UserResponse {
  id: number;
  name: string;
  job: string;
  count: number;

  constructor(id: number, name: string, job: string) {
    this.id = id;
    this.name = name;
    this.job = job;
    this.count = 0;
  }
}