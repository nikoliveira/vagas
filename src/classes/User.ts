import generateId from '../helper/idGenerator';
import Person from './Person';

class User extends Person {
  public id: number;

  constructor(name: string, job: string, role = 'common') {
    super(name, job, role);
    this.id = generateId();
    this.setName(name);
  }

  getUserObj() {
    return {
      id: this.id,
      name: this.name,
      job: this.job,
      role: this.role,
      called: this.called,
    };
  }
}

export default User;
