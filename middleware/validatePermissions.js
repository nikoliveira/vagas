const validarPermissoes = (req, _res, next) => {
    const userDelete = true; 
    const userUpdate = true;
    req.permissoes = {
      deletar: userDelete,
      atualizar: userUpdate,
    };
  
    next();
  }

  module.exports = validarPermissoes