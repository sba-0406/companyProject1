const OTP = require("../models/OTP")
const User = require("../models/User")
// const Domain = require("../models/Domain")
const WhitelistEmail = require("../models/WhitelistEmail")
const { generateOTP } = require("../services/otpService")
const { sendOTP } = require("../services/emailService")
const { signToken } = require("../utils/jwtUtils")

exports.sendOTP = async (req, res) => {
    try {
        const { email, source } = req.body

        if (!email) {
            return res.status(400).json({ error: "Email is required" })
        }
        const whitelistRecord = await WhitelistEmail.findOne({ email: email.toLowerCase() })
        const personalDomains = [
            "gmail.com", "yahoo.com", "hotmail.com", "outlook.com",
            "icloud.com", "aol.com", "zoho.com", "live.com", "msn.com"
        ]
        const domain = email.split("@")[1]?.toLowerCase()

        if (personalDomains.includes(domain) && !whitelistRecord) {
            return res.status(403).json({
                error: "Personal email addresses are not allowed. Please use your corporate email."
            })
        }

        // Check if user is already an admin in DB
        const user = await User.findOne({ email: email.toLowerCase() })
        const isAdminEmail = user && user.role === "admin"

        // Check if domain is authorized (Unused now as we allow unified login)
        // role assignment happens in verifyOTP

        await OTP.deleteMany({ email })

        const code = generateOTP()
        console.log(`\n************************************`)
        console.log(`OTP for ${email}: ${code}`)
        console.log(`************************************\n`)

        const newOTP = await OTP.create({
            email,
            code,
            expiresAt: Date.now() + 300000
        })
        console.log(`[DEBUG] Saved OTP to DB: ${newOTP.code} (ID: ${newOTP._id})`)

        await sendOTP(email, code)
        console.log(`[DEBUG] Sent OTP via email: ${code}`)

        res.json({ message: "OTP sent" })
    } catch (error) {
        console.error("Error in sendOTP:", error.message)
        res.status(500).json({ error: "Failed to send OTP", details: error.message })
    }
}



exports.verifyOTP = async (req, res) => {

    const { email, otp } = req.body
    console.log(`[DEBUG] Verifying OTP for ${email}: ${otp}`)

    const record = await OTP.findOne({ email, code: otp })

    if (!record) {
        console.log(`[DEBUG] No record found for ${email} with code ${otp}`)
        return res.status(400).json({
            message: "Invalid OTP"
        })
    }

    if (record.expiresAt < Date.now()) {
        console.log(`[DEBUG] OTP expired for ${email}. Expires at: ${record.expiresAt}, Current time: ${Date.now()}`)
        return res.status(400).json({
            message: "OTP expired"
        })
    }

    const whitelistRecord = await WhitelistEmail.findOne({ email: email.toLowerCase() })

    const superAdminEmails = (process.env.SUPER_ADMIN_EMAILS || "").split(",").map(e => e.trim().toLowerCase())
    const isSuperAdmin = superAdminEmails.includes(email.toLowerCase())

    let role = "prospect"

    if (isSuperAdmin) {
        role = "admin"
    } else if (whitelistRecord) {
        role = "customer"
    }

    let user = await User.findOne({ email })

    if (!user) {
        user = await User.create({
            email,
            role,
            isApproved: (role === "admin" || role === "customer"),
            ndaSigned: (role === "customer"),
            permissions: (role === "admin") ? {
                approveRequests: true,
                uploadDocs: true,
                manageAdmins: true,
                manageWidgets: true
            } : undefined
        })
    } else {
        if (!user.role || user.role === "prospect") {
            user.role = role
        }
        if (isSuperAdmin) {
            user.permissions = {
                approveRequests: true,
                uploadDocs: true,
                manageAdmins: true,
                manageWidgets: true
            }
        }
        if (role === "customer") {
            user.isApproved = true
            user.ndaSigned = true
        }
        await user.save()
    }

    const token = signToken({ id: user._id, role: user.role })

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    })

    res.json({
        message: "Login successful",
        user,
        token
    })

}

exports.getUser = async (req, res) => {
    try {
        const { email } = req.params
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        res.json(user)
    } catch (error) {
        console.error("Error in getUser:", error.message)
        res.status(500).json({ error: "Failed to fetch user" })
    }
}

exports.checkEmail = async (req, res) => {
    try {
        const { email } = req.body
        if (!email) return res.status(400).json({ error: "Email is required" })

        const user = await User.findOne({ email: email.toLowerCase() })
        if (user) {
            // User exists. If they are admin or customer, they can proceed to login (OTP).
            // If they are a prospect, we should check if they are approved.
            return res.json({ exists: true, user })
        }

        // Check if it's a corporate email (existing logic in sendOTP, we can reuse or centralize)
        const personalDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com", "aol.com", "zoho.com", "live.com", "msn.com"]
        const domain = email.split("@")[1]?.toLowerCase()
        if (personalDomains.includes(domain)) {
            const whitelistRecord = await WhitelistEmail.findOne({ email: email.toLowerCase() })
            if (!whitelistRecord) {
                return res.status(403).json({ error: "Personal emails are not allowed." })
            }
        }

        res.json({ exists: false })
    } catch (err) {
        res.status(500).json({ error: "Server error" })
    }
}

exports.registerProspect = async (req, res) => {
    try {
        const { email, firstName, lastName, company, reason, termsAccepted, marketingUpdates } = req.body
        if (!email || !firstName || !lastName || !company) {
            return res.status(400).json({ error: "All fields are required" })
        }

        let user = await User.findOne({ email: email.toLowerCase() })
        if (user) {
            return res.status(400).json({ error: "User already exists" })
        }

        const role = (reason === "I'm an existing customer") ? "customer" : "prospect"
        const ndaSigned = (role === "customer")

        user = await User.create({
            email: email.toLowerCase(),
            firstName,
            lastName,
            company,
            reason,
            role,
            isApproved: true,
            ndaSigned,
            termsAccepted: !!termsAccepted,
            marketingUpdates: !!marketingUpdates
        })

        res.json({ message: "Registration successful", user })
    } catch (err) {
        res.status(500).json({ error: "Server error" })
    }
}