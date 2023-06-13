import { Request, Response } from "express";
import { AccessUserUsecase } from "./AccessUserUsecase";
import path, { basename } from "path";

class AccessUserController {
  constructor(private accessUserUsecase: AccessUserUsecase) {}

  handle(request: Request, response: Response) {
    try {
      const file = this.accessUserUsecase.execute();
      response.sendFile(file, {
        root: basename('/logs')
      });
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