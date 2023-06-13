export interface ICreateUserRequestDTO {
    email: string;
    admin?: boolean;
    password: string;
    name: string;
    job: string;
}