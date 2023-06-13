import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import bcrypt from 'bcrypt';

export class UpdateUserController {
    constructor(private updateUserUseCase: UpdateUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const { name, password, job } = request.body;

            const newEncryptedPassword = await bcrypt.hash(password, 10);

            const user = {
                id,
                name,
                password: newEncryptedPassword,
                job
            }

            const userUpdated = this.updateUserUseCase.execute(user);

            return response.status(200).json(userUpdated);
        } catch (error) {
            return response.status(404).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}