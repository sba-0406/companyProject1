const Scenario = require('../models/Scenario');

// @desc    Get all scenarios
// @route   GET /api/scenarios
// @access  Private
exports.getScenarios = async (req, res) => {
    try {
        const { jobRole } = req.query;
        console.log('--- SCENARIO FETCH START ---');
        console.log('Query JobRole:', jobRole);

        let query = {};
        if (jobRole && jobRole !== 'None' && jobRole !== 'undefined' && jobRole !== 'null') {
            // Trim and replace any whitespace characters, including newlines
            const cleanRole = jobRole.trim();
            // Match anywhere in the string, but preferably exact match for clean UI
            // Using a simpler regex that handles potential hidden chars better
            query.jobRole = { $regex: new RegExp(cleanRole, 'i') };
        }

        const scenarios = await Scenario.find(query).sort({ order: 1 });
        console.log(`--- SCENARIO FETCH --- Role: "${jobRole}" | Found: ${scenarios.length}`);

        if (scenarios.length === 0) {
            const allScenarios = await Scenario.find();
            console.log('TOTAL SCENARIOS IN DATABASE:', allScenarios.length);
        }

        res.status(200).json({ success: true, count: scenarios.length, data: scenarios });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// @desc    Get single scenario
// @route   GET /api/scenarios/:id
// @access  Private
exports.getScenario = async (req, res) => {
    try {
        const scenario = await Scenario.findById(req.params.id);
        if (!scenario) {
            return res.status(404).json({ success: false, error: 'Scenario not found' });
        }
        res.status(200).json({ success: true, data: scenario });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// @desc    Get unique job roles
// @route   GET /api/scenarios/roles
// @access  Private
exports.getUniqueRoles = async (req, res) => {
    try {
        const roles = await Scenario.distinct('jobRole');
        res.status(200).json({ success: true, data: roles.sort() });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// @desc    Create scenario (seeds or admin)
// @route   POST /api/scenarios
// @access  Private/Admin
exports.createScenario = async (req, res) => {
    try {
        // Basic validation for stages
        if (!req.body.stages || req.body.stages.length === 0) {
            return res.status(400).json({ success: false, error: 'At least one stage is required' });
        }

        // Auto-assign first rubric if not provided
        if (!req.body.rubric) {
            const Rubric = require('../models/Rubric');
            const defaultRubric = await Rubric.findOne();
            if (defaultRubric) req.body.rubric = defaultRubric._id;
        }

        const scenario = await Scenario.create(req.body);
        res.status(201).json({ success: true, data: scenario });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// @desc    Update scenario
// @route   PUT /api/scenarios/:id
// @access  Private/Admin
exports.updateScenario = async (req, res) => {
    try {
        const scenario = await Scenario.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!scenario) {
            return res.status(404).json({ success: false, error: 'Scenario not found' });
        }

        res.status(200).json({ success: true, data: scenario });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// @desc    Delete scenario
// @route   DELETE /api/scenarios/:id
// @access  Private/Admin
exports.deleteScenario = async (req, res) => {
    try {
        const scenario = await Scenario.findByIdAndDelete(req.params.id);

        if (!scenario) {
            return res.status(404).json({ success: false, error: 'Scenario not found' });
        }

        res.status(200).json({ success: true, message: 'Scenario deleted successfully' });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// @desc    Get scenario by role and difficulty
// @route   GET /api/scenarios/by-role-difficulty
// @access  Private
exports.getScenarioByRoleDifficulty = async (req, res) => {
    try {
        const { role, difficulty } = req.query;

        if (!role || !difficulty) {
            return res.status(400).json({ success: false, error: 'Role and difficulty are required' });
        }

        const scenario = await Scenario.findOne({
            jobRole: { $regex: new RegExp(`^${role}$`, 'i') },
            difficulty
        });

        if (!scenario) {
            return res.status(404).json({ success: false, error: 'No scenario found for this role and difficulty' });
        }

        res.status(200).json({ success: true, data: scenario });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};
