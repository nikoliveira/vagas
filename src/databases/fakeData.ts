import { IUser } from "../interfaces/user/IUser";
import { IUserCounter } from "../interfaces/counter/IUserCounter";

export const Counter: Array<IUserCounter> = [];

const fakeData: IUser[] =  [
    {
		id: "9ed8c76a-3023-4452-aa43-771dfd7a84c2",
		name: "Leandro Cunha",
		password: "$2a$10$XnGbmbNlhBPyBsnuuP0mtuVvivFAGSQBPfciqXNLtYLtLBK8HfkDi", //admin12345 cryptated by bcryptjs
		isAdmin: true,
		job: "Developer"
	},
	{
		id: "f4bce098-a7f3-4297-80c6-4e7ed3af16ce",
		name: "Jose Silva",
		password: "$2a$10$g2RoV8IEC2nk1baJis1/iObb2q4Mxc10kdZ8DSOksFHfPLzSFNqYa", //admin12345 cryptated by bcryptjs
		isAdmin: false,
		job: "Full Stack"
  }
];

export default fakeData;
