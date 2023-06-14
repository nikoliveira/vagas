interface IUserCreate {
  name: string;
  password: string;
  job: string;
  isAdm?: boolean;
}

interface IUserUpdate {
  name?: string;
  password?: string;
  job?: string;
}

export { IUserCreate, IUserUpdate };
