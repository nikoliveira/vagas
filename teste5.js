module.exports = function (req, res) {
    const { name } = req.query;
    const message = `Usuário ${name} foi lido 0 vezes.`;
    res.send(message);
};