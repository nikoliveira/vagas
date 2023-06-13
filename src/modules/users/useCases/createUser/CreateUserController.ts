import { Request, Response } from "express";
import { CreateUserUsecase } from "./CreateUserUsecase";

class CreateUserController {
  constructor(private createUserUsecase: CreateUserUsecase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, job } = request.body;
      const user = this.createUserUsecase.execute({ name, job });
      return response.status(201).json(user);
    } catch(error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message})
      } else {
        return response.status(400).json({ error })
      }      
    }
  }
}

export { CreateUserController }