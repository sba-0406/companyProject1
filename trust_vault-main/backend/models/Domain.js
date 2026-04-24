const mongoose = require("mongoose")

const DomainSchema = new mongoose.Schema({
  domain: String,
  type: {
    type: String,
    enum: ["customer", "partner"]
  },
  addedBy: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Domain", DomainSchema)
