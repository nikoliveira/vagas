const auth = (req, res, next) => {
    // função mockada para pegar token do usuário (criado no arquivo middleware-permissao se token for 1 = admin, 2 = user)
    // utilizado no app.js
    const token = req.headers['x-api-token'];

    req.user = req.db.findByToken(token);

    next();
}

const permission = (...role) => {
    // função mockada para verificar se token do usuário possui permissão para determinado endpoint (utilizado no app.js)
    return (req, res, next) => {
        if (req.user && role.includes(req.user.role)) {
            next();
        } else {
            response.status(403).json({message: "Forbidden"});
        }
    }
}

const token = (req, res, next) => {    
    // mock de middleware para token para permissão de usuário
    req.db = {
        findByToken: token => {
            if (token === 1) {
                return {role: 'admin', id: 1};
            }
            if (token === 2) {
                return {role: 'user', id: 2};
            }
        }
    }
    next();
}

module.exports = {
    auth,
    permission,
    token
}