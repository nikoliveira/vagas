import { readingsCounterService } from "../../services/user/readingsCounter.service.js";

export const readingsCounterController = (req, res) => {
  const { userId } = req.params;

  const response = readingsCounterService(userId);

  return res.status(200).json(response);
};
