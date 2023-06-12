export interface User {
    id: number;
    name: string;
    job: string;
    readCounter: number;
}

export interface UpdateUser {
    name?: string;
    job?: string;
}
