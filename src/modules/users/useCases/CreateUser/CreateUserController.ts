import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import bcrypt from 'bcrypt';

export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password, job, admin } = request.body;

        try {
            const encryptedPassword = await bcrypt.hash(password, 10);

            this.createUserUseCase.execute({
                admin,
                name,
                email,
                password: encryptedPassword,
                job,
            });
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}