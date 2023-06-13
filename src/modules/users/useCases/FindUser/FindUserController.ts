import { Request, Response } from "express";
import { FindUserUseCase } from "./FindUserUseCase";

export class FindUserController {
    constructor (private findUserUseCase: FindUserUseCase) {}
    
    async handle(request: Request, response: Response): Promise<Response> {
        
        try {
           
            const emailRetrived = request.query.email as string;
            
            const findUser = this.findUserUseCase.execute(emailRetrived);
            
            return response.status(200).json(findUser);
        } catch(error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}