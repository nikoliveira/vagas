import { v4 as uuidv4 } from 'uuid';

export class User {
    public id?: string;

    public name: string;
    public admin?: boolean;
    public job: string;
    public email: string;
    public password: string;

    constructor(props: Omit<User, 'id, admin'>) {
        Object.assign(this, props);

        if (!this.id) {
            this.id = uuidv4();
        }
        
        if (!this.admin) {
            this.admin = false;
        }
    }
}