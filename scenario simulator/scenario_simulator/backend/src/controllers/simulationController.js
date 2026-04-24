const evaluationService = require('../services/evaluationService');
const SimulationResponse = require('../models/SimulationResponse');
const User = require('../models/User');

// @desc    Submit a simulation response
// @route   POST /api/simulation/submit
// @access  Private
exports.submitSimulation = async (req, res) => {
  try {
    const { scenarioId, stageResponses } = req.body;

    // Call service to handle core logic + AI
    const result = await evaluationService.evaluateResponse(req.user.id, scenarioId, stageResponses);

    res.status(200).json({ success: true, data: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// @desc    Share simulation report with a manager
// @route   POST /api/simulation/:id/share
// @access  Private
exports.shareSimulation = async (req, res) => {
  try {
    const { managerEmail } = req.body;
    const manager = await User.findOne({ email: managerEmail, role: 'manager' });

    if (!manager) {
      return res.status(404).json({ success: false, error: 'Manager not found' });
    }

    const simulation = await SimulationResponse.findById(req.params.id);
    if (!simulation) {
      return res.status(404).json({ success: false, error: 'Simulation not found' });
    }

    if (simulation.user.toString() !== req.user.id) {
      return res.status(401).json({ success: false, error: 'Not authorized' });
    }

    if (!simulation.sharedWith.includes(manager._id)) {
      simulation.sharedWith.push(manager._id);
      await simulation.save();
    }

    res.status(200).json({ success: true, data: 'Shared successfully' });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Get user's past simulations
// @route   GET /api/simulation/history
// @access  Private
exports.getHistory = async (req, res) => {
  try {
    const history = await SimulationResponse.find({ user: req.user.id })
      .populate('scenario', 'title')
      .sort({ completedAt: -1 });

    res.status(200).json({ success: true, count: history.length, data: history });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
