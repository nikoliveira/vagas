import { Request, Response } from "express";
import { UpdateUserUsecase } from "./UpdateUserUsecase";

class UpdateUserController {
  constructor(private updateUserUsecase: UpdateUserUsecase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, job } = request.body;
      const { user_id } = request.params;
      const id = parseInt(user_id, 10);
      const user = this.updateUserUsecase.execute({ name, job, id });
      return response.json(user);
    } catch(error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message})
      } else {
        return response.status(400).json({ error })
      }      
    }
  }
}

export { UpdateUserController }