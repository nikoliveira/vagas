export interface User {
    id: number;
    name: string;
    password: string;
    job: string;
    readCounter: number;
    isAdmin?: boolean;
}

export interface UpdateUser {
    name?: string;
    job?: string;
    isAdmin?: boolean;
    password?: string;
}

export interface CreateUser {
    name: string;
    password: string;
    job: string;
    isAdmin?: boolean;
}
