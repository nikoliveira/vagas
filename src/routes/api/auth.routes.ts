import { Request, Response, Router } from "express";
import jwt from 'jsonwebtoken';

const router = Router();

router.post("/", (request: Request, res: Response) => {
  const { name, job } = request.body;

  const userAuthenticated = true;

  if (userAuthenticated) {
    const token = jwt.sign({ name, job }, '51985364295' );
    return res.json({ token })
  } 
})

export { router };