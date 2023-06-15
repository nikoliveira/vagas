import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import fakeData from "../database/fakeData";
import { AppError } from "../errors/appError";

const verifyAccountOwner = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const foundUser = fakeData.find((user) => user.id === id);

  if (!foundUser) {
    throw new AppError(404, "User Not Found!");
  }

  let userId = foundUser.id;

  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }

  let tokenSplit = token.split(" ");

  jwt.verify(tokenSplit[1], process.env.SECRET_KEY as string, (error: any, decoded: any) => {
    if (decoded.isAdm === true || (decoded.id === userId && decoded.isAdm === false)) {
      next();
    } else if (decoded.id !== userId && decoded.isAdm === false) {
      return res.status(403).json({
        message: "User do not have permission",
      });
    }
  });
};

export default verifyAccountOwner;
