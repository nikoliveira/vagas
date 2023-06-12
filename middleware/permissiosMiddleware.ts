import { RequestHandler } from "express";
import { getUserPermissions } from "../utils";

const validateUserPermissions: RequestHandler = (req, res, next) => {
  const { userId } = req.body;

  const { mappedPermissions, userExists } = getUserPermissions(userId);
  if (!userExists) {
    return res.status(401).json({ message: "Acesso não autorizado" });
  }

  
  
  const canDeleteUser = mappedPermissions.includes("DELETE_USER");
  const CanUpdateUser = mappedPermissions.includes("UPDATE_USER");

  console.log(mappedPermissions, userExists, "tem perissão??", canDeleteUser ,CanUpdateUser);
  next();
};

export default validateUserPermissions;
