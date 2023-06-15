import { Request, Response } from "express";
import { readingsCounterService } from "../../services";

export const readingsCounterController = (req: Request, res: Response) => {
  const { id } = req.params;

  const readingsCounter = readingsCounterService(id);

  return res.status(200).json(readingsCounter);
};
