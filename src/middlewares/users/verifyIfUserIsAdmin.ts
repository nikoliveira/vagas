import { NextFunction, Request, Response } from "express";
import { UsersRepository } from "../../modules/users/repositories/UsersRepository";

const verifyIfUserIsAdmin = (request: Request, response: Response, next: NextFunction) => {
    const usersRepository = UsersRepository.getInstance();

    const { id } = request.params;
    const adminId = request.headers['admin_id'] as string;

    const targetUser = usersRepository.findById(id);

    const adminUser = usersRepository.findById(adminId);

    if (!targetUser || !adminUser?.admin || !adminUser) {
        return response.status(403).json({ error: "You don't have permission to perform this action." })
    }

    if (adminUser?.admin === targetUser.admin) {
        return response.status(403).json({ error: "You are not allowed to remove or update another admin" })
    }

    return next();
}

export { verifyIfUserIsAdmin };