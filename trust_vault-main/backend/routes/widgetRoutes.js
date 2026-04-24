const router = require("express").Router()
const controller = require("../controllers/widget.controller")

router.get("/", controller.getWidgets)
router.get("/logo/:key", controller.getLogo)

module.exports = router
