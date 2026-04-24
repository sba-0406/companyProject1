// const WhitelistEmail = require("../models/WhitelistEmail")

// exports.getWhitelistedEmails = async (req, res) => {
//     try {
//         const emails = await WhitelistEmail.find().sort({ createdAt: -1 })
//         res.json(emails)
//     } catch (err) {
//         res.status(500).json({ error: err.message })
//     }
// }

// exports.createWhitelistedEmail = async (req, res) => {
//     try {
//         const { email } = req.body
//         if (!email) {
//             return res.status(400).json({ error: "Email is required" })
//         }

//         // Check if already exists
//         const existing = await WhitelistEmail.findOne({ email: email.toLowerCase() })
//         if (existing) {
//             return res.status(400).json({ error: "Email already whitelisted" })
//         }

//         const newEmail = new WhitelistEmail({ email: email.toLowerCase() })
//         await newEmail.save()
//         res.json(newEmail)
//     } catch (err) {
//         res.status(500).json({ error: err.message })
//     }
// }

// exports.deleteWhitelistedEmail = async (req, res) => {
//     try {
//         await WhitelistEmail.findByIdAndDelete(req.params.id)
//         res.json({ message: "Deleted" })
//     } catch (err) {
//         res.status(500).json({ error: err.message })
//     }
// }
