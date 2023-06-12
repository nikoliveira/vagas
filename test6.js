// 1. Definir permissões para os usuários
const userPermissions = {
  admin: ["delete", "update"],
  regularUser: ["update"]
};

// 2. Adicionar permissões ao usuário após autenticação
function authenticateUser(req, res, next) {
  // ...
  // Verificar as credenciais do usuário e obter suas informações

  // Definir as permissões para o usuário
  req.user.permissions = userPermissions[req.user.role];

  next();
}

// 3. Criar middleware para validar as permissões
function checkPermissions(req, res, next) {
  const requiredPermissions = req.route.permissions;

  // Verificar se o usuário possui todas as permissões necessárias
  const hasPermissions = requiredPermissions.every(permission =>
    req.user.permissions.includes(permission)
  );

  if (!hasPermissions) {
    return res.status(403).json({ error: "Usuário não tem permissão suficiente." });
  }

  next();
}

// 4. Aplicar o middleware nas rotas que exigem permissões
app.delete("/user/:id", checkPermissions, (req, res) => {
  // Rota para deletar um usuário
});

app.put("/user/:id", checkPermissions, (req, res) => {
  // Rota para atualizar um usuário
});
