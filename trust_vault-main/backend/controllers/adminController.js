const User = require("../models/User")
const AccessRequest = require("../models/AccessRequest")
const NDARequest = require("../models/NDARequest")
const { notifyUserAccessApproved, notifyUserProspectApproved } = require("../services/emailService")

exports.getAccessRequests = async (req, res) => {
    try {
        const requests = await AccessRequest.find()
            .populate("documentId", "title")
            .populate("approvedBy", "email firstName lastName")
            .sort({ requestedAt: -1 })
            .lean()

        // Fetch user roles AND company for all unique emails
        const emails = [...new Set(requests.map(r => r.email))]
        const users = await User.find({ email: { $in: emails } }, "email role company")
        const userMap = users.reduce((acc, u) => {
            acc[u.email] = { role: u.role, company: u.company }
            return acc
        }, {})

        // Attach role + company (fallback to User.company if not stored on the request)
        const enrichedRequests = requests.map(r => ({
            ...r,
            userRole: userMap[r.email]?.role || "prospect",
            company: r.company || userMap[r.email]?.company || null
        }))

        res.json(enrichedRequests)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.approveAccess = async (req, res) => {
    try {
        const { id } = req.params
        let { adminId, adminEmail, documentIds } = req.body

        if (!adminId && adminEmail) {
            const adminUser = await User.findOne({ email: adminEmail.toLowerCase() })
            if (adminUser) adminId = adminUser._id
        }

        const request = await AccessRequest.findByIdAndUpdate(id, {
            status: "approved",
            approvedBy: adminId
        }, { returnDocument: 'after' })

        if (request) {
            // Using documentIds if provided, otherwise fallback to the single document requested
            const docsToGrant = (documentIds && documentIds.length > 0) ? documentIds : [request.documentId]

            const updatedUser = await User.findOneAndUpdate(
                { email: request.email },
                { $addToSet: { accessibleDocs: { $each: docsToGrant } } },
                { returnDocument: 'after' }
            )


            // Notify for all granted documents (concatenated or generic)
            await notifyUserAccessApproved(request.email, "requested documents")
        }

        res.json({ message: "approved" })
    } catch (error) {
        res.status(500).json({ error: "Failed to approve access", details: error.message })
    }
}


exports.deleteAccessRequest = async (req, res) => {
    try {
        const { id } = req.params
        await AccessRequest.findByIdAndDelete(id)
        res.json({ message: "request deleted" })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.getProspects = async (req, res) => {
    try {
        const prospects = await NDARequest.find({ status: "pending" })
        res.json(prospects)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.approveProspect = async (req, res) => {
    try {
        const { id } = req.params
        const prospect = await NDARequest.findByIdAndUpdate(id, { status: "approved" }, { new: true })

        if (prospect) {
            await User.findOneAndUpdate({ email: prospect.email }, { ndaSigned: true })
            await notifyUserProspectApproved(prospect.email)
        }
        res.json({ message: "prospect approved" })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.deleteProspect = async (req, res) => {
    try {
        const { id } = req.params
        await NDARequest.findByIdAndDelete(id)
        res.json({ message: "prospect deleted" })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.getDashboardStats = async (req, res) => {
    try {
        const totalDocs = await require("../models/Document").countDocuments()
        const publicDocs = await require("../models/Document").countDocuments({ accessTier: "public" })
        const privateDocs = await require("../models/Document").countDocuments({ accessTier: "private" })
        const pendingRequests = await AccessRequest.countDocuments({ status: "pending" })
        const approvedRequests = await AccessRequest.countDocuments({ status: "approved" })

        const pendingProspects = await NDARequest.countDocuments({ status: "pending" })

        res.json({
            totalDocs,
            publicDocs,
            privateDocs,
            pendingRequests,
            approvedRequests,
            pendingProspects
        })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.getAdmins = async (req, res) => {
    try {
        const admins = await User.find({ role: "admin" })
        res.json(admins)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.addAdmin = async (req, res) => {
    try {
        const { email, permissions } = req.body
        const user = await User.findOneAndUpdate(
            { email: email.toLowerCase() },
            {
                role: "admin",
                isApproved: true,
                permissions: permissions || {
                    approveRequests: false,
                    uploadDocs: false,
                    manageAdmins: false
                }
            },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        )
        res.json({ message: "Admin added", user })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.updateAdminPermissions = async (req, res) => {
    try {
        const { id } = req.params
        const { permissions } = req.body
        const user = await User.findByIdAndUpdate(
            id,
            { permissions },
            { new: true }
        )
        res.json({ message: "Permissions updated", user })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.removeAdmin = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndUpdate(id, { role: "customer" }, { new: true })
        res.json({ message: "Admin removed", user })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}