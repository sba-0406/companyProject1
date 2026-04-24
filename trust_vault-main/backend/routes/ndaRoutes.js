const router = require("express").Router()
const controller = require("../controllers/ndaController")
const { protect } = require("../middleware/authMiddleware")

router.post("/submit", protect, controller.submitNDA)
router.get("/preview", protect, controller.previewNDA)

module.exports = router