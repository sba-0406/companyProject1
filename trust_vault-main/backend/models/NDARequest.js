const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    email: String,
    fullName: String,
    signedDocUrl: String,
    s3Key: String,
    status: {
        type: String,
        default: "pending"
    },
    signedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("NDARequest", Schema)