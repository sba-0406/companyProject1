const { verifyToken } = require("../utils/jwtUtils")
const User = require("../models/User")

exports.protect = async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1]
    } else if (req.cookies && req.cookies.token) {
        token = req.cookies.token
    }

    if (!token) {
        return res.status(401).json({ error: "Not authorized to access this route" })
    }

    try {
        const decoded = verifyToken(token)

        if (!decoded) {
            return res.status(401).json({ error: "Invalid token" })
        }

        const user = await User.findById(decoded.id)

        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }

        req.user = user
        next()
    } catch (err) {
        return res.status(401).json({ error: "Not authorized" })
    }
}

exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                error: `User role ${req.user.role} is not authorized to access this route`
            })
        }
        next()
    }
}

exports.optionalProtect = async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1]
    }

    if (token) {
        try {
            const decoded = verifyToken(token)
            if (decoded) {
                const user = await User.findById(decoded.id)
                if (user) {
                    req.user = user
                }
            }
        } catch (err) {
            // Ignore error for optional protect
        }
    }
    next()
}
