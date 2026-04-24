const transporter = require("../config/mailer")
const User = require("../models/User")

async function getAdminEmails() {
    try {
        const admins = await User.find({ role: "admin" }, "email")
        if (admins.length === 0) return [process.env.EMAIL_USER]
        return admins.map(a => a.email)
    } catch (err) {
        console.error("Error fetching admin emails:", err)
        return [process.env.EMAIL_USER]
    }
}

exports.sendOTP = async (email, code) => {
    const loginLink = process.env.FRONTEND_URL || "https://trust.darwinbox.com"
    transporter.sendMail({
        to: email,
        subject: "Your Darwinbox Trust Center Verification Code",
        text: `Hello,\n\nYour verification code for Darwinbox Trust Center is: ${code}\n\nYou can enter this code on the login page or follow this link to return to the Trust Center: ${loginLink}\n\nThis code will expire in 5 minutes.\n\nBest regards,\nDarwinbox Security Team`
    }).catch(err => console.error("Error sending OTP email:", err))
}


exports.sendNDA = async (email, pdf) => {

    transporter.sendMail({

        to: process.env.EMAIL_USER,

        subject: "New NDA Signed",

        text: `NDA signed by ${email}`,

        attachments: [
            {
                filename: "signed-nda.pdf",
                content: pdf
            }
        ]

    }).catch(err => console.error("Error sending NDA email:", err))

}

exports.notifyAdminNewRequest = async (requestData) => {
    const adminEmails = await getAdminEmails()
    transporter.sendMail({
        to: adminEmails,
        subject: "New Access Request - Trust Center",
        text: `New access request from ${requestData.email} for document ID ${requestData.documentId}. Reason: ${requestData.reason}`
    }).catch(err => console.error("Error sending admin notification:", err))
}

exports.notifyUserAccessApproved = async (email, docName) => {
    transporter.sendMail({
        to: email,
        subject: "Access Approved - Darwinbox Trust Center",
        text: `Your access to ${docName} has been approved. You can now view it on the Trust Center.`
    }).catch(err => console.error("Error sending access approval email:", err))
}

exports.notifyAdminNewProspect = async (email) => {
    const adminEmails = await getAdminEmails()
    transporter.sendMail({
        to: adminEmails,
        subject: "New Prospect Registered - Trust Center",
        text: `A new prospect with email ${email} has signed the NDA and is awaiting approval.`
    }).catch(err => console.error("Error sending prospect notification:", err))
}

exports.notifyUserProspectApproved = async (email) => {
    transporter.sendMail({
        to: email,
        subject: "Account Approved - Darwinbox Trust Center",
        text: `Your account has been approved. You can now log in and access public documents, and request access to private ones.`
    }).catch(err => console.error("Error sending account approval email:", err))
}