const router = require("express").Router()
const controller = require("../controllers/authController")

router.post("/send-otp", controller.sendOTP)
router.post("/verify-otp", controller.verifyOTP)
router.get("/user/:email", controller.getUser)
router.post("/check-email", controller.checkEmail)
router.post("/register-prospect", controller.registerProspect)

module.exports = router