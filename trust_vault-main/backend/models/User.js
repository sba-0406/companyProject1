const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    role: {
        type: String,
        enum: ["admin", "customer", "prospect"]
    },
    company: String,
    ndaSigned: {
        type: Boolean,
        default: false
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    accessibleDocs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Document"
    }],
    reason: String,
    accessLevel: {
        type: String,
        default: "limited"
    },
    termsAccepted: {
        type: Boolean,
        default: false
    },
    marketingUpdates: {
        type: Boolean,
        default: false
    },
    permissions: {
        approveRequests: { type: Boolean, default: false },
        uploadDocs: { type: Boolean, default: false },
        manageAdmins: { type: Boolean, default: false },
        manageWidgets: { type: Boolean, default: false }
    }
})

module.exports = mongoose.model("User", UserSchema)