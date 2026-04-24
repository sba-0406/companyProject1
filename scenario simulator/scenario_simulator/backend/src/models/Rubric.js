const mongoose = require('mongoose');

const RubricSchema = new mongoose.Schema({
  scenarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Scenario' // Optional back-reference if needed, but mainly Scenario->Rubric
  },
  competencies: [{
    name: {
      type: String,
      required: true
    },
    description: String,
    keywords: {
      type: [String],
      required: true
    },
    levelIndicators: {
      low: String,
      medium: String,
      high: String
    }
  }],
  textScoringCriteria: [{
    criterion: {
      type: String,
      required: true
    },
    maxPoints: {
      type: Number,
      required: true,
      min: 1,
      max: 10
    },
    description: String,
    keywords: [String], // Optional keywords to guide AI
    examples: {
      good: String,
      poor: String
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Rubric', RubricSchema);
