import { Request, Response } from "express";
import { DeleteUserUsecase } from "./DeleteUserUsecase";

class DeleteUserController {
  constructor(private deleteUserUsecase: DeleteUserUsecase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      const id = parseInt(user_id, 10);
      this.deleteUserUsecase.execute({ id });
      return response.status(200).json({ message: "Success Removing User"});
    } catch(error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message})
      } else {
        return response.status(400).json({ error })
      }      
    }
  }
}

export { DeleteUserController }