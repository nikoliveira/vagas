export interface IUser {
  id: number | string,
  name: string,
  job: string,
  views?: number,
}

export interface IUserRequest extends Omit<IUser, "id"> {

}
