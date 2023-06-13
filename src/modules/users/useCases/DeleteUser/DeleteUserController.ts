import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
    constructor(private deleteUserUseCase: DeleteUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const { id } = request.params;
            const userDeleted = this.deleteUserUseCase.execute(id);

            return response.status(200).json(userDeleted);
        } catch (error) {
            return response.status(404).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}