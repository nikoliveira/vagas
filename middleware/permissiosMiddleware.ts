import { RequestHandler } from "express";
import { getUserPermissions } from "../utils";

const validateUserPermissions: RequestHandler = (req, res, next) => {
  const { userId } = req.body;

  const { canDeleteUser, canUpdateUser, userExists } =
    getUserPermissions(userId);
  if (!userExists) {
    return res.status(401).json({ message: "Acesso não autorizado" });
  }

  console.log(req.path, req.method === "GET");

  if (req.method === "PUT" && !canUpdateUser) {
    return res.status(401).json({ message: "Acesso não autorizado" });
  }
  if ( req.method === "DELETE" && !canDeleteUser) {
    return res.status(401).json({ message: "Acesso não autorizado" });
  }

  // console.log(userExists, "tem perissão??", canDeleteUser, canUpdateUser);
  next();
};

export default validateUserPermissions;
