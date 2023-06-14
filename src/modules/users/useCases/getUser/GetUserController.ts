import { Request, Response } from "express";
import { GetUserUsecase } from "./GetUserUsecase";

class GetUserController {
  constructor(private getUserUsecase: GetUserUsecase) {}

  handle(request: Request, response: Response): Response {    
    try {
      let { user_id } = request.params
      const id = parseInt(user_id, 10);
      const user = this.getUserUsecase.execute({ id });
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

export { GetUserController }