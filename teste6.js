module.exports = function(req, res, next) {

    const isAdmin = req.headers.is_admin;

    if (isAdmin === 'true') {
        next();
    } else {
        res.status(403).send({
            message: "Acesso negado. Você não tem permissão de administrador."
        });
    }
};