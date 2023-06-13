const jwt = require("jsonwebtoken")

const createToken = (payload) => {
    const token = jwt.sign(
        payload,
        "jwtKey", // idealmente estaria em um arquivo .env
        {
            expiresIn: "30d"
        }
    )
    return token
}

const getPayload = (token) => {
    try {
        const payload = jwt.verify(
            token,
            "jwtKey", // idealmente estaria em um arquivo .env
        )
        return payload
    } catch (error) {
        return null
    }
}

module.exports = {
    createToken,
    getPayload
}