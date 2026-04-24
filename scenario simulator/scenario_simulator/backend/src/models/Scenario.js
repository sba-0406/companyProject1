const mongoose = require('mongoose');

const ScenarioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    default: 'Medium'
  },
  jobRole: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    default: 1
  },
  stages: [{
    type: {
      type: String,
      enum: ['text', 'mcq', 'ranking'],
      required: true
    },
    prompt: {
      type: String,
      required: true
    },
    options: [String], // For MCQ or Ranking (simple text)
    scoreWeights: [{
      option: String,      // The option text
      score: Number,       // Points awarded (0-10 scale)
      competencies: [String] // Competencies this choice demonstrates
    }],
    order: Number,
    config: {
      minWords: Number,
      maxPicks: Number
    }
  }],
  rubric: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rubric',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Scenario', ScenarioSchema);
