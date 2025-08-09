const permissions = {}; 
// Exemplo: permissions[1] = { canDelete: true, canUpdate: false }

function setPermission(userId, { canDelete = false, canUpdate = false }) {
  permissions[userId] = { canDelete, canUpdate };
}

function checkPermission(action) {
  return (req, res, next) => {
    const { id } = req.query;
    if (!id) {
      return res.status(400).send({ error: "Parâmetro 'id' é obrigatório" });
    }

    const userPerms = permissions[id];
    if (!userPerms || !userPerms[action]) {
      return res.status(403).send({ error: "Usuário sem permissão para realizar esta ação" });
    }

    next();
  };
}

module.exports = {
  setPermission,
  checkPermission
};
