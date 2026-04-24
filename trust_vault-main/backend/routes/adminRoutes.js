const router = require("express").Router()
const adminController = require("../controllers/adminController")
const documentController = require("../controllers/documentController")
const domainController = require("../controllers/domain.controller")
const widgetController = require("../controllers/widget.controller")
const whitelistController = require("../controllers/whitelistController")
const ndaController = require("../controllers/ndaController")
const { protect, restrictTo } = require("../middleware/authMiddleware")

// Admin Authorization Middleware 
// We still use these to check specific permissions on top of JWT authentication
const isAdmin = async (req, res, next) => {
    // req.user is already populated by protect middleware
    const user = req.user

    if (!user || user.role !== "admin") {
        return res.status(403).json({ error: "Access denied. Admin role required." })
    }

    // Auto-sync bootstrap admins if needed
    const superAdmins = (process.env.SUPER_ADMIN_EMAILS || "").split(",").map(e => e.trim().toLowerCase())
    if (superAdmins.includes(user.email?.toLowerCase())) {
        const p = user.permissions || {}
        if (!p.approveRequests || !p.uploadDocs || !p.manageAdmins || !p.manageWidgets) {
            user.permissions = {
                approveRequests: true,
                uploadDocs: true,
                manageAdmins: true,
                manageWidgets: true
            }
            await user.save()
        }
    }

    req.admin = user
    next()
}

const hasPermission = (p) => async (req, res, next) => {
    const user = req.user
    const superAdmins = (process.env.SUPER_ADMIN_EMAILS || "").split(",").map(e => e.trim().toLowerCase())
    if (superAdmins.includes(user.email?.toLowerCase())) return next()

    if (user && user.permissions && user.permissions[p]) return next()

    res.status(403).json({ error: `Permission denied: ${p}` })
}

// All admin routes are protected and restricted to admins
router.use(protect)
router.use(restrictTo("admin"))

// Access Requests & Stats
router.get("/access-requests", isAdmin, hasPermission("approveRequests"), adminController.getAccessRequests)
router.post("/approve/:id", isAdmin, hasPermission("approveRequests"), adminController.approveAccess)
router.delete("/access-requests/:id", isAdmin, hasPermission("approveRequests"), adminController.deleteAccessRequest)
router.get("/stats", isAdmin, adminController.getDashboardStats)

// Domain Management
router.get("/domains", isAdmin, domainController.getDomains)
router.post("/domains", isAdmin, domainController.createDomain)
router.delete("/domains/:id", isAdmin, domainController.deleteDomain)

// Whitelist Management
// router.get("/whitelist", isAdmin, whitelistController.getWhitelistedEmails)
// router.post("/whitelist", isAdmin, whitelistController.createWhitelistedEmail)
// router.delete("/whitelist/:id", isAdmin, whitelistController.deleteWhitelistedEmail)

// Widget Controls
router.get("/widgets", isAdmin, hasPermission("manageWidgets"), widgetController.getWidgets)
router.post("/widgets", isAdmin, hasPermission("manageWidgets"), widgetController.createWidget)
router.put("/widgets/:id", isAdmin, hasPermission("manageWidgets"), widgetController.updateWidget)
router.post("/widgets/upload-logo", isAdmin, hasPermission("manageWidgets"), widgetController.uploadMiddleware, widgetController.uploadLogo)
router.delete("/widgets/:id", isAdmin, hasPermission("manageWidgets"), widgetController.deleteWidget)

// Document Management
router.get("/docs", isAdmin, documentController.getDocuments)
router.post("/docs/upload", isAdmin, hasPermission("uploadDocs"), documentController.uploadMiddleware, documentController.uploadDoc)
router.put("/docs/:id", isAdmin, hasPermission("uploadDocs"), documentController.uploadMiddleware, documentController.updateDocument)
router.delete("/docs/:id", isAdmin, hasPermission("uploadDocs"), documentController.deleteDocument)

// Admin Management
router.get("/admins", isAdmin, hasPermission("manageAdmins"), adminController.getAdmins)
router.post("/admins", isAdmin, hasPermission("manageAdmins"), adminController.addAdmin)
router.put("/admins/:id/permissions", isAdmin, hasPermission("manageAdmins"), adminController.updateAdminPermissions)
router.delete("/admins/:id", isAdmin, hasPermission("manageAdmins"), adminController.removeAdmin)

// Prospect & NDA Management
router.get("/prospects", isAdmin, hasPermission("approveRequests"), adminController.getProspects)
router.post("/approve-prospect/:id", isAdmin, hasPermission("approveRequests"), adminController.approveProspect)
router.delete("/prospects/:id", isAdmin, hasPermission("approveRequests"), adminController.deleteProspect)
router.get("/ndas", isAdmin, hasPermission("approveRequests"), ndaController.getNDAs)
router.get("/ndas/view/:id", isAdmin, hasPermission("approveRequests"), ndaController.viewSignedNDA)

module.exports = router