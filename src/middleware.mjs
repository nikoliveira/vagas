import UserRepository from "./repositories/UserRepository.mjs";

export const adminMiddleware = (req, res, next) => {
  const repo = new UserRepository();
  const user = repo.users.find((item) => item.id === req.params.id);

  if (user && user.role === 'ADMIN') {
    next();
  } else {
    res.status(401).send('Não autorizado'); 
  }
};