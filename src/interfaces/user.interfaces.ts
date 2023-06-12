export interface IUser {
  id: number | string,
  name: string,
  job: string,
  views?: number,
  username: string,
  password: string,
  isAdm: boolean,
}

export interface IUserRequest extends Omit<IUser, "id"> {

}

export interface ILogin {
  username: string,
  password: string,
}
