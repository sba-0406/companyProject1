const mongoose = require("mongoose")

const WhitelistEmailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    addedBy: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("WhitelistEmail", WhitelistEmailSchema)
