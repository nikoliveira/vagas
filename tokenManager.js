export const createToken = (payload) => {
    const token = jwt.sign(
        payload,
        "jwtKey", // idealmente estaria em um arquivo .env
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    )
    return token
}

export const getPayload = (token) => {
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