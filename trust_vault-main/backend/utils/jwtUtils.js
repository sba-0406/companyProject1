const jwt = require("jsonwebtoken")

const JWT_SECRET = process.env.JWT_SECRET || "default_secret_change_me"
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d"

exports.signToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN
    })
}

exports.verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET)
    } catch (err) {
        return null
    }
}
