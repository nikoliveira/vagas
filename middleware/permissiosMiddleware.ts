import { RequestHandler } from "express";
import { getUserPermissions } from "../utils";

const validateUserPermissions: RequestHandler = (req, res, next) => {
  const { userId } = req.body;

  const { userPermissions, userExists } = getUserPermissions(userId);

  if (!userExists) {
    return res.status(401).json({ message: "Acesso não autorizado" });
  }
  
  console.log(userPermissions, userExists);
  next();
};

export default validateUserPermissions;
