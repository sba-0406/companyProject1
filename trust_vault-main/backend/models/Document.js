const mongoose = require("mongoose")

const DocumentSchema = new mongoose.Schema({

  title: String,

  description: String,

  accessTier: {
    type: String,
    enum: ["public", "private"],
    default: "public"
  },

  category: {
    type: String,
    enum: ["Compliance", "Security", "Policies", "Audits"],
    default: "Compliance"
  },

  s3Url: String,

  allowedUsers: [
    {
      email: String,
      grantedBy: String,
      grantedAt: Date
    }
  ],

  createdAt: {
    type: Date,
    default: Date.now
  }

})

module.exports = mongoose.model("Document", DocumentSchema)