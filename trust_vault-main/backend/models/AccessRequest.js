const mongoose = require("mongoose")

const AccessRequestSchema = new mongoose.Schema({

  email: String,

  company: String,

  documentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Document"
  },
  documentName: String,

  reason: String,

  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  },

  requestedAt: {
    type: Date,
    default: Date.now
  },
  approvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  termsAccepted: {
    type: Boolean,
    default: false
  },
  marketingUpdates: {
    type: Boolean,
    default: false
  }

})

module.exports = mongoose.model("AccessRequest", AccessRequestSchema)