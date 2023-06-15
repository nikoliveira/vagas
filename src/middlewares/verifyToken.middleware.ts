import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }

  const tokenSplit = token.split(" ");

  jwt.verify(tokenSplit[1], process.env.SECRET_KEY as string, (error: any, decoded: any) => {
    if (error) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }

    req.body.user = {
      id: decoded.id,
      name: decoded.name,
      isAdm: decoded.isAdm,
    };

    next();
  });
};

export default verifyToken;
