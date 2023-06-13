const jwt = require("jsonwebtoken");

const generateToken = (params = {}) => {
    return jwt.sign(params, '12345678910', {
        expiresIn: 86400,
    });
}

const removeSpecialCharacters = (text) => {

    const newText = text && text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().trim();

    return newText;
};

module.exports = {
    generateToken,
    removeSpecialCharacters,
};