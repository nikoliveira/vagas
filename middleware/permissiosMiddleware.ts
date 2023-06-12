import { RequestHandler } from "express";
import { getUserPermissions } from "../utils";

const validateUserPermissions: RequestHandler = (req, res) => {
  const { userId } = req.body;

  const userPermissions = getUserPermissions(userId);

  console.log(userPermissions);
};

export default validateUserPermissions;
