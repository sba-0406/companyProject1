const SimulationResponse = require('../models/SimulationResponse');
const ChatSession = require('../models/ChatSession');
const User = require('../models/User');

// @desc    Get user report (self)
// @route   GET /api/reports/me
// @access  Private
exports.getMyReport = async (req, res) => {
  try {
    const responses = await SimulationResponse.find({ user: req.user.id }).populate('scenario');
    const dojoSessions = await ChatSession.find({
      user: req.user.id,
      status: 'completed',
      finalReport: { $exists: true }
    });

    // Combine and sort by date
    const history = [...responses, ...dojoSessions].sort((a, b) => {
      const dateA = a.completedAt || a.createdAt;
      const dateB = b.completedAt || b.createdAt;
      return new Date(dateB) - new Date(dateA);
    });

    // Aggregate data for report
    const stats = {
      totalSimulations: history.length,
      competenciesObserved: 0,
      competenciesMissed: 0
    };

    // Aggregate stats from both types
    history.forEach(r => {
      if (r.competencyScores && Array.isArray(r.competencyScores)) {
        // Standard Simulation
        r.competencyScores.forEach(c => {
          if (c.status === 'Observed') stats.competenciesObserved++;
          else stats.competenciesMissed++;
        });
      } else if (r.finalReport && r.finalReport.competencyScores) {
        // Dojo Session
        Object.values(r.finalReport.competencyScores).forEach(score => {
          if (score >= 70) stats.competenciesObserved++;
          else stats.competenciesMissed++;
        });
      }
    });

    res.status(200).json({ success: true, data: { stats, history } });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Get reports shared with me (Manager)
// @route   GET /api/reports/shared
// @access  Private/Manager
exports.getSharedReports = async (req, res) => {
  try {
    const responses = await SimulationResponse.find({ sharedWith: req.user.id })
      .populate('user', 'name email')
      .populate('scenario');

    res.status(200).json({ success: true, count: responses.length, data: responses });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
