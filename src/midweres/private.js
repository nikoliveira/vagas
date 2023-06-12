var data = require("../data/fakeData");

module.exports = (req, res, next) => {
    // usando o formato jwt para autorizar requisiçoes
    const authorizationHeader = req.headers['authorization'];
    const token = authorizationHeader.substring(7);
    if (!token) return res.status(404).json({ error: 'Parametro invalido' });
    const user = data.find((item) => item.token == token);  //  usanado o método find para encontrar o primeiro elemento que atenda à condição.
    if (!user) return res.status(404).json({ error: 'Usuario nao encontrado' });
    if (user) {
        next()
    }

};





