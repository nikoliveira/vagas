import { v4 as uuid } from "uuid";
import { hashSync } from "bcrypt";

export class User {
  id;
  name;
  job;
  isAdm;
  password;

  constructor({ name, job, isAdm = false, password }) {
    this.id = uuid();
    this.name = name;
    this.job = job;
    this.isAdm = isAdm;
    this.password = hashSync(password, 10);
  }

  update({ name, job, isAdm, password }) {
    name && (this.name = name);
    job && (this.job = job);
    isAdm && (this.isAdm = isAdm);
    password && (this.password = hashSync(password, 10));
  }

  info() {
    return {
      id: this.id,
      name: this.name,
      job: this.job,
      isAdm: this.isAdm,
    };
  }
}
