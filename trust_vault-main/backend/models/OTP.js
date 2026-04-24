const mongoose = require("mongoose")

const OTPSchema = new mongoose.Schema({
 email:String,
 code:String,
 expiresAt:Date
})

module.exports = mongoose.model("OTP",OTPSchema)