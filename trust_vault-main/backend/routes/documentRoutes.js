const router = require("express").Router()
const controller = require("../controllers/documentController")
const { protect, optionalProtect } = require("../middleware/authMiddleware")

router.get("/", optionalProtect, controller.getDocuments)
router.post("/request", protect, controller.requestAccess)
router.post("/view", protect, controller.getViewUrl)

module.exports = router