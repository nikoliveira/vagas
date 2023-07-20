import Person from '../../classes/Person';

class TestPerson extends Person {
  constructor(name: string, job: string, role = 'common') {
    super(name, job, role);
  }
}

export default TestPerson;
