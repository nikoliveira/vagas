export default class CheckRoleMiddleware {
  constructor(role) {
    this.role = role;
  }

  check(req, res, next) {
    const userRole = req.user && req.user.role; 

    if (userRole === this.role) {
      next();
    } else {
      res.status(401).send('Não autorizado'); 
    }
  }
}