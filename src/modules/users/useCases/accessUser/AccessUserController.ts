import { Request, Response } from "express";
import { AccessUserUsecase } from "./AccessUserUsecase";

class AccessUserController {
  constructor(private accessUserUsecase: AccessUserUsecase) {}

  handle(request: Request, response: Response) {
    try {
      let { user_id } = request.params
      const id = parseInt(user_id, 10);
      const accessCount = this.accessUserUsecase.execute({ id });
      return response.json({ message: accessCount});
    } catch(error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message})
      } else {
        return response.status(400).json({ error })
      }      
    }
  }
}

export { AccessUserController }