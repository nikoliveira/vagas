import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

export class ListUsersController {
    constructor(private listUsersUseCase: ListUsersUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const allUsers = this.listUsersUseCase.execute();
            return response.json(allUsers);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}