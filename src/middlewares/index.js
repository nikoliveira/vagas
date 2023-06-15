import data from '../database/fakeData';

export const findUser = (req, res, next) => {
    const { name } = req.query
    const userIndex = data.findIndex(user => user.name === name)
    
    if (userIndex < 0) return res.status(404).send('Usuário não encontrado');
  
    req.userIndex = userIndex
    next()  
}

export const validatePermissions = (req, res, next) => {
    const { userIndex } = req
    const user = data[userIndex]

    if (user.permission && req.method === 'DELETE' && user.permission.includes(req.header('permission'))) {
      return next()
    }
    if (user.permission && req.method === 'PUT' && user.permission.includes(req.header('permission'))) {
      return next()
    }
    return res.status(403).send('Permissão insuficiente');
  
  };
  