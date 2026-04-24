const mongoose = require("mongoose")

const WidgetSchema = new mongoose.Schema({
  widgetName: String,
  isVisible: Boolean,
  isEditable: Boolean,
  config: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  updatedBy: String,
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Widget", WidgetSchema)