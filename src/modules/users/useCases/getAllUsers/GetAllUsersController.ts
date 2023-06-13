import { Request, Response } from "express";
import { GetAllUsersUsecase } from "./GetAllUsersUsecase";

class GetAllUsersController {
  constructor(private getAllUsersUsecase: GetAllUsersUsecase) {}

  handle(request: Request, response: Response): Response {
    try {
      const users = this.getAllUsersUsecase.execute();
      return response.json(users);
    } catch(error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message})
      } else {
        return response.status(400).json({ error })
      }      
    }
  }
}

export { GetAllUsersController }