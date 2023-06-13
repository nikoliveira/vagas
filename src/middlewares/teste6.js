const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    if (!('authorization' in req.headers)) return res.status(401).send({ error: "Not authorized, please login." });

    const authHeader = req.headers.authorization;
    const parts = authHeader.split(' ');
    const [scheme, token] = parts;

    if (!authHeader) return res.status(401).send({ error: "No token provided" });

    if (!parts.length === 2) {
        return res.status(400).send({ error: "Token Error" });
    }

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(400).send({ error: "Token Incorrect format token" });
    }

    jwt.verify(token, '12345678910', (err, decoded) => {
        if (err) return res.status(401).send({ error: "Invalid token" });

        req.userId = decoded.id;
    });

    return next();
};

const verifyIsAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;

    const parts = authHeader.split(" ");

    const [_, token] = parts;

    jwt.verify(token, '12345678910', (err, decoded) => {
        console.log('err: ', err)
        console.log('decoded: ', decoded)
        if (decoded.access_type === "Administrador") {
            return next();
        } else {
            return res.status(401).send({ error: "Unauthorized user" });
        }
    });

    return next();
}

module.exports = {
    auth,
    verifyIsAdmin
}