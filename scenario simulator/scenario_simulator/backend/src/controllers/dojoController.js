const ChatSession = require('../models/ChatSession');
const chatService = require('../services/chatService');
const { getRequirementsForRole, mapCompetenciesToNames } = require('../config/roleCompetencies');

/**
 * Helper: Calculate Grade
 */
function getGrade(score) {
    if (score >= 90) return 'S';
    if (score >= 80) return 'A';
    if (score >= 70) return 'B';
    if (score >= 60) return 'C';
    if (score >= 50) return 'D';
    return 'F';
}

/**
 * Start a new Dojo 3-Scenario Journey
 */
exports.startDojoSession = async (req, res) => {
    try {
        const { role } = req.body;
        if (!role) return res.status(400).json({ success: false, error: 'Role is required' });

        const scenarios = chatService.generateScenarioSet(role);

        const session = await ChatSession.create({
            user: req.user._id,
            archetype: {
                role,
                type: 'MULTI_SCENARIO_DOJO',
                goal: `Complete 3 ${role} scenarios successfully`,
                intensity: 'High'
            },
            persona: {
                name: scenarios[0].stakeholder,
                role: scenarios[0].stakeholder,
                mood: 'Tense',
                instructions: scenarios[0].description
            },
            scenarioProgress: {
                currentScenario: 1,
                totalScenarios: 3,
                scenarios
            },
            messages: []
        });

        console.log(`[DOJO] Started session ${session._id} for role ${role}`);
        res.status(201).json({ success: true, data: session });
    } catch (err) {
        console.error('[DOJO ERROR] startDojoSession:', err);
        res.status(500).json({ success: false, error: 'Failed to start dojo session' });
    }
};

/**
 * Handle user response (Free-text or MCQ)
 */
exports.respondToScenario = async (req, res) => {
    try {
        const { sessionId, message, mcqChoice } = req.body;
        const session = await ChatSession.findById(sessionId);

        if (!session) return res.status(404).json({ success: false, error: 'Session not found' });

        // If already completed, just return current state
        if (session.status === 'completed') {
            return res.status(200).json({ success: true, data: { isComplete: true, isResolved: true } });
        }

        const currentScenarioIndex = session.scenarioProgress.currentScenario - 1;
        const currentScenario = session.scenarioProgress.scenarios[currentScenarioIndex];

        let userMessage = String(message || '').trim();
        let moodDelta = 0;
        let scores = null;

        if (mcqChoice) {
            userMessage = mcqChoice.text;
            moodDelta = Number(mcqChoice.moodDelta) || 0;
            scores = mcqChoice.scores || {};
        } else {
            if (!userMessage) userMessage = "...";

            scores = await chatService.evaluateResponse(
                userMessage,
                session.archetype.role,
                currentScenario.description,
                session.messages
            );

            const scoreValues = Object.values(scores || {}).map(v => Number(v)).filter(v => !isNaN(v));
            const avg = scoreValues.length > 0 ? scoreValues.reduce((a, b) => a + b, 0) / scoreValues.length : 50;

            // Stronger mood impact (55-45 ranges)
            moodDelta = Math.round((avg - 50) / 2);
        }

        // Apply fallback scores if AI fails to provide all 6
        const cleanScores = {};
        for (let i = 1; i <= 6; i++) {
            const key = `competency${i}`;
            const val = scores ? (scores[key] || scores[key.charAt(0).toUpperCase() + key.slice(1)] || scores[String(i)]) : null;
            cleanScores[key] = (val !== null && !isNaN(val)) ? Number(val) : (72 + (i % 4));
        }

        // Update Cumulative Metrics
        const count = session.metrics.messageCount || 0;
        Object.keys(cleanScores).forEach(key => {
            const currentVal = session.metrics[key] || 0;
            session.metrics[key] = Math.round((currentVal * count + cleanScores[key]) / (count + 1));
        });
        session.metrics.messageCount = count + 1;

        // Message and Mood
        session.messages.push({ sender: 'user', text: userMessage });
        const oldMood = Number(currentScenario.moodLevel) || 50;
        currentScenario.moodLevel = chatService.updateMoodLevel(oldMood, moodDelta);

        // AI Response
        const history = session.messages.map(m => ({ sender: m.sender, text: m.text }));
        let aiText = await chatService.generateResponse(history, {
            name: currentScenario.stakeholder,
            role: currentScenario.stakeholder,
            mood: currentScenario.moodLevel < 40 ? 'Angry' : currentScenario.moodLevel < 60 ? 'Tense' : 'Calm',
            context: currentScenario.description
        });

        aiText = String(aiText || '...').trim();
        session.messages.push({ sender: 'ai', text: aiText });

        // Check Resolution
        const isResolved = chatService.checkResolution(currentScenario.moodLevel);
        if (isResolved && currentScenario.resolution === null) {
            currentScenario.resolution = 'success';
            currentScenario.status = 'resolved';
            currentScenario.completedAt = new Date();
            console.log(`[DOJO] Scenario ${session.scenarioProgress.currentScenario} Resolved!`);
        }

        const isLastScenario = session.scenarioProgress.currentScenario >= session.scenarioProgress.totalScenarios;

        // Generate MCQs for next turn
        const mcqOptions = await chatService.generateMCQOptions(
            session.messages,
            currentScenario.description,
            currentScenario.moodLevel
        );

        session.markModified('scenarioProgress.scenarios');
        await session.save();

        res.status(200).json({
            success: true,
            data: {
                message: aiText,
                moodLevel: currentScenario.moodLevel,
                mcqOptions,
                isResolved,
                isLastScenario,
                scenario: currentScenario
            }
        });

    } catch (err) {
        console.error('[DOJO ERROR] respondToScenario:', err);
        res.status(500).json({ success: false, error: 'Internal system error' });
    }
};

/**
 * Advance or Finalize Session
 */
exports.nextScenario = async (req, res) => {
    try {
        const { sessionId, reason } = req.body;
        const session = await ChatSession.findById(sessionId);
        if (!session) return res.status(404).json({ success: false, error: 'Session not found' });

        const currentIdx = session.scenarioProgress.currentScenario - 1;
        const current = session.scenarioProgress.scenarios[currentIdx];

        // Ensure resolution is marked
        if (current.resolution === null) {
            current.resolution = reason || 'timeout';
            current.status = (reason === 'success') ? 'resolved' : 'failed';
            current.completedAt = new Date();
        }

        const isLast = session.scenarioProgress.currentScenario >= session.scenarioProgress.totalScenarios;

        if (!isLast) {
            session.scenarioProgress.currentScenario += 1;
            const nextIdx = session.scenarioProgress.currentScenario - 1;
            const next = session.scenarioProgress.scenarios[nextIdx];

            next.status = 'in-progress';
            next.startedAt = new Date();

            session.persona.name = next.stakeholder;
            session.persona.role = next.stakeholder;
            session.persona.instructions = next.description;
            session.messages = [];

            console.log(`[DOJO] Advancing to Scenario ${session.scenarioProgress.currentScenario}`);
        } else {
            session.status = 'completed';
            session.completedAt = new Date();
            console.log(`[DOJO] Simulation Complete. Status -> Completed`);
        }

        session.markModified('scenarioProgress.scenarios');
        await session.save();

        res.status(200).json({
            success: true,
            data: {
                currentScenario: session.scenarioProgress.currentScenario,
                isComplete: session.status === 'completed'
            }
        });
    } catch (err) {
        console.error('[DOJO ERROR] nextScenario:', err);
        res.status(500).json({ success: false, error: 'Failed to advance simulation' });
    }
};

/**
 * Finalize Report Construction
 */
exports.finalizeDojoSession = async (req, res) => {
    try {
        const { sessionId } = req.body;
        const session = await ChatSession.findById(sessionId);
        if (!session) return res.status(404).json({ success: false, error: 'Session not found' });

        const role = session.archetype.role;
        const competencyScores = mapCompetenciesToNames(role, session.metrics);
        const requirements = getRequirementsForRole(role);

        const strengths = [];
        const improvements = [];

        Object.keys(competencyScores).forEach(c => {
            const score = competencyScores[c];
            const reqVal = requirements[c] || 75;
            if (score >= reqVal) strengths.push(c);
            else improvements.push(`${c} (Gap: ${reqVal - score})`);
        });

        const scoreValues = Object.values(competencyScores);
        const avg = scoreValues.length > 0 ? scoreValues.reduce((a, b) => a + b, 0) / scoreValues.length : 0;
        const grade = getGrade(avg);

        // Recommendation Logic
        const topGaps = improvements.map(i => i.split(' (')[0]).slice(0, 3);
        const recommendation = avg >= 75
            ? `Top-tier ${role} performance. You handle stakeholders with exceptional professional maturity.`
            : avg >= 60
                ? `Strong ${role} potential. Focus on sharpening: ${topGaps.join(', ')}.`
                : `Developing ${role} skillset. Prioritize training in: ${topGaps.join(', ')}.`;

        const report = {
            roleAssessed: role,
            scenariosCompleted: session.scenarioProgress.scenarios.length,
            scenarioResults: session.scenarioProgress.scenarios.map(s => ({
                name: s.stakeholder,
                status: s.resolution || 'skipped',
                finalMood: s.moodLevel
            })),
            competencyScores,
            roleRequirements: requirements,
            gapAnalysis: { strengths, improvements },
            overallGrade: grade,
            recommendation
        };

        session.finalReport = report;
        session.status = 'completed';
        session.completedAt = new Date();
        await session.save();

        console.log(`[DOJO] Report Finalized for Session ${session._id}. Grade: ${grade}`);
        res.status(200).json({ success: true, data: report });

    } catch (err) {
        console.error('[DOJO ERROR] finalizeDojoSession:', err);
        res.status(500).json({ success: false, error: 'Failed to generate comprehensive report' });
    }
};

/**
 * Retrieval
 */
exports.getDojoSession = async (req, res) => {
    try {
        const session = await ChatSession.findById(req.params.id);
        if (!session) return res.status(404).json({ success: false, error: 'Session not found' });
        res.status(200).json({ success: true, data: session });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Data retrieval error' });
    }
};
