const aiGenerationService = require('../services/aiGenerationService');

// Generate scenario titles
exports.generateTitles = async (req, res) => {
    try {
        const { role, difficulty } = req.body;

        if (!role || !difficulty) {
            return res.status(400).json({ success: false, error: 'Role and difficulty are required' });
        }

        const result = await aiGenerationService.generateScenarioTitles(role, difficulty);
        res.status(200).json({ success: true, data: result });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// Generate scenario description
exports.generateDescription = async (req, res) => {
    try {
        const { role, difficulty, title } = req.body;

        if (!role || !difficulty || !title) {
            return res.status(400).json({ success: false, error: 'Role, difficulty, and title are required' });
        }

        const result = await aiGenerationService.generateDescription(role, difficulty, title);
        res.status(200).json({ success: true, data: result });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// Generate questions
exports.generateQuestions = async (req, res) => {
    try {
        const { description, stageType, previousStages } = req.body;

        if (!description || !stageType) {
            return res.status(400).json({ success: false, error: 'Description and stageType are required' });
        }

        const result = await aiGenerationService.generateQuestions(description, stageType, previousStages || []);
        res.status(200).json({ success: true, data: result });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};


// Generate options
exports.generateOptions = async (req, res) => {
    try {
        const { question, count } = req.body;

        if (!question) {
            return res.status(400).json({ success: false, error: 'Question is required' });
        }

        const result = await aiGenerationService.generateOptions(question, count || 4);
        res.status(200).json({ success: true, data: result });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// Suggest score for an option
exports.suggestScore = async (req, res) => {
    try {
        const { option, competencies } = req.body;

        if (!option) {
            return res.status(400).json({ success: false, error: 'Option text is required' });
        }

        const result = await aiGenerationService.suggestScore(option, competencies || []);
        res.status(200).json({ success: true, data: result });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// Suggest competencies
exports.suggestCompetencies = async (req, res) => {
    try {
        const { option } = req.body;

        if (!option) {
            return res.status(400).json({ success: false, error: 'Option text is required' });
        }

        const result = await aiGenerationService.suggestCompetencies(option);
        res.status(200).json({ success: true, data: result });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// Validate difficulty
exports.validateDifficulty = async (req, res) => {
    try {
        const { scenario } = req.body;

        if (!scenario || !scenario.title || !scenario.difficulty) {
            return res.status(400).json({ success: false, error: 'Scenario with title and difficulty is required' });
        }

        const result = await aiGenerationService.validateDifficulty(scenario);
        res.status(200).json({ success: true, data: result });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// Check duplicates
exports.checkDuplicates = async (req, res) => {
    try {
        const { newScenario, existingScenarios } = req.body;

        if (!newScenario || !existingScenarios) {
            return res.status(400).json({ success: false, error: 'New scenario and existing scenarios are required' });
        }

        const result = await aiGenerationService.checkDuplicates(newScenario, existingScenarios);
        res.status(200).json({ success: true, data: result });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// Analyze score balance
exports.analyzeScoreBalance = async (req, res) => {
    try {
        const { options } = req.body;

        if (!options || !Array.isArray(options)) {
            return res.status(400).json({ success: false, error: 'Options array is required' });
        }

        const result = await aiGenerationService.analyzeScoreBalance(options);
        res.status(200).json({ success: true, data: result });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// Validate Scenario Consistency
exports.validateConsistency = async (req, res) => {
    try {
        const { jobRole, difficulty, title, description, stages } = req.body;
        const result = await aiGenerationService.validateConsistency({ jobRole, difficulty, title, description, stages });
        res.status(200).json({ success: true, data: result });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};


// Refine Scenario Content
exports.refineContent = async (req, res) => {
    try {
        const { type, content, role, difficulty, previousStages } = req.body;
        if (!content) return res.status(400).json({ success: false, error: 'Content to refine is required' });

        const result = await aiGenerationService.refineText(type, content, { role, difficulty, previousStages });
        res.status(200).json({ success: true, data: result });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};


// Apply AI Fixes 
exports.applyFixes = async (req, res) => {
    try {
        const { scenario, auditReport } = req.body;
        const result = await aiGenerationService.applyAuditFixes(scenario, auditReport);
        res.status(200).json({ success: true, data: result });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// Get AI Source Diagnostics
exports.getDiagnostics = async (req, res) => {
    try {
        const aiService = require('../services/aiService');
        res.status(200).json({ success: true, data: aiService.getSource() });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};
