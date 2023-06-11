import { fakeData } from "./fakeData.mjs";

export const adminMiddleware = (req, res, next) => {
  const user = fakeData.find((item) => item.id === req.params.id);

  if (user && user.role === 'ADMIN') {
    next();
  } else {
    res.status(401).send('Não autorizado'); 
  }
};