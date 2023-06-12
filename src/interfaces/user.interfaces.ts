export interface IUser {
  id: number | string,
  name: string,
  job: string,
}

export interface IUserRequest extends Omit<IUser, "id"> {

}
