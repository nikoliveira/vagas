import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const availableRoutes = [
    'get api/users/', 
    'get api/users/', 
    'post api/users/', 
    'delete api/users/', 
    'put api/users/'
  ];
  res.json({ availableRoutes })
})

export { router };

