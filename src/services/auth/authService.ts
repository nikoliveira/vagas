import { IUserAuth } from "src/interfaces/auth/IUserAuth";
import * as jwt from "jsonwebtoken";
import * as bcryptjs from "bcryptjs";
import fakeData from "../../databases/fakeData";
import { AppError } from '../../handlers/errors/appError';

export const authService = async({name, password} : IUserAuth) => {
    const userCheck = fakeData.find((user) => user.name === name);
    const passwordCheck = await bcryptjs.compare(password, userCheck!.password);

    if(!userCheck) {
        throw new AppError("Name of the user or password enter is invalid", 401); // Unauthorized
    }
    else if(!passwordCheck) {
        throw new AppError("Name of the user or password enter is invalid", 401); // Unauthorized
    }

    const token = jwt.sign({id: userCheck.id, name: userCheck.name, isAdmin: userCheck.isAdmin},
    process.env.SECRET_KEY as string, {expiresIn: "1h"});
    return {
        id: userCheck.id,
        name: userCheck.name,
        isAdmin: userCheck.isAdmin,
        token: token
    };
}
