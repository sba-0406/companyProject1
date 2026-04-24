const mongoose = require('mongoose');

const SimulationResponseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  scenario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Scenario',
    required: true
  },
  stageResponses: [{
    stageIndex: Number,
    type: { type: String, enum: ['text', 'mcq', 'ranking'] },
    answer: mongoose.Schema.Types.Mixed, // String, Index, or Array of indices
    scoreEarned: { type: Number, default: 0 }, // Points earned for this stage
    maxScore: { type: Number, default: 10 },   // Max possible points for this stage
    aiReasoning: {
      confidence: Number,        // 0-1 scale
      evidence: [String],        // Quotes from user response
      breakdown: [{              // Per-criterion breakdown
        criterion: String,
        pointsAwarded: Number,
        justification: String
      }]
    },
    timestamp: { type: Date, default: Date.now }
  }],
  totalScore: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  rawInput: {
    type: String, // Full concatenated transcript for AI summarization
  },
  aiSummarizedInput: {
    type: [String], // Array of bullet points
    default: []
  },
  competencyScores: [{
    competency: String,
    score: { type: Number, default: 0 }, // Aggregated score for this competency
    observedParameters: [String], // Keywords matched or evidence
    status: {
      type: String,
      enum: ['Observed', 'Not Observed', 'Partial'],
      default: 'Not Observed'
    },
    feedback: String
  }],
  aiFeedback: {
    type: String, // General coherence/communication feedback
  },
  sharedWith: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  aiMetadata: {
    provider: String,
    model: String,
    status: String
  },
  completedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('SimulationResponse', SimulationResponseSchema);
