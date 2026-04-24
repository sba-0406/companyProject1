const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const helmet = require("helmet")
const cookieParser = require("cookie-parser")
const rateLimit = require("express-rate-limit")
require("dotenv").config()

const authRoutes = require("./routes/authRoutes")
const ndaRoutes = require("./routes/ndaRoutes")
const documentRoutes = require("./routes/documentRoutes")
const adminRoutes = require("./routes/adminRoutes")
const widgetRoutes = require("./routes/widgetRoutes")

const app = express()

// Security Middleware
const corsOrigins = (process.env.CORS_ORIGINS || "http://localhost:3000,http://localhost:5173").split(",").map(o => o.trim())
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            ...helmet.contentSecurityPolicy.getDefaultDirectives(),
            "frame-ancestors": ["'self'", ...corsOrigins],
        },
    },
    crossOriginResourcePolicy: { policy: "cross-origin" }
}))
app.use(cookieParser())

// Rate limiting for auth routes
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window`
    message: "Too many requests from this IP, please try again after 15 minutes"
})
app.use("/api/auth", authLimiter)

app.use(cors({
    origin: (origin, callback) => {
        // If it's a browser request (has origin) and we allow * or the specific origin
        if (!origin) {
            callback(null, true)
        } else if (corsOrigins.includes("*") || corsOrigins.includes(origin)) {
            // Reflect the origin back to the client (required for credentials: true)
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true
}))
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("Mongo connected")
        // Initialize default widgets
        try {
            const widgetController = require("./controllers/widget.controller")
            await widgetController.initializeWidgets()
            console.log("Default widgets initialized")
        } catch (err) {
            console.error("Widget initialization failed:", err)
        }
    })

app.use("/api/auth", authRoutes)
app.use("/api/nda", ndaRoutes)
app.use("/api/documents", documentRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/widgets", widgetRoutes)

if (process.env.NODE_ENV !== "test" && !process.env.VERCEL) {
    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

module.exports = app

process.on("unhandledRejection", (err) => {
    console.log("Unhandled Rejection:", err.message)
})

process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception:", err.message)
})