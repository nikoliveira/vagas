const data = require("../fakeData");

// Middleware de verificação de permissão
const checkPermission = (req, res, next) => {
    const userId = Number(req.query.id); // Supondo que o parâmetro de identificação seja "id"
    const userName = req.query.name;
    let user;

    if (userId) {
        user = data.find(user => user.id === userId);
    }

    if (userName) {
        user = data.find(user => user.name === userName);
    }

    // Verifica se o usuário foi encontrado
    if (!user) {
        return res.status(404).send("Usuário não encontrado.");
    }

    user.permissions = user.permissions || [];

    // Verifica se o usuário tem permissão para atualizar ou deletar
    if (!user.permissions.includes("update") && !user.permissions.includes("delete")) {
        return res.status(403).send("Usuário não tem permissão para executar essa ação.");
    }

    // Verifica se o método da solicitação é PUT ou DELETE
    const method = req.method;
    if ((method === "PUT" && !user.permissions.includes("update")) || (method === "DELETE" && !user.permissions.includes("delete"))) {
        return res.status(403).send("Usuário não tem permissão para realizar esta operação.");
    }

    next();
};

module.exports = checkPermission;