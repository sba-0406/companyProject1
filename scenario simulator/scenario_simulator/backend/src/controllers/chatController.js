const ChatSession = require('../models/ChatSession');
const chatService = require('../services/chatService');

// Start a new Persona Chat Session
exports.startSession = async (req, res) => {
    try {
        const { role } = req.body; // e.g., 'Manager'
        if (!role) return res.status(400).json({ success: false, error: 'Role is required' });

        // 1. Generate Persona
        const personaData = await chatService.generatePersona(role);

        // 2. Create Session
        const session = await ChatSession.create({
            user: req.user._id,
            archetype: personaData.archetype,
            persona: {
                name: personaData.name,
                role: personaData.role,
                mood: personaData.mood,
                briefing: personaData.briefing, // Pass the structured mission
                instructions: JSON.stringify(personaData.briefing) // Fallback context
            },
            messages: [{
                sender: 'ai',
                text: personaData.firstMessage,
                timestamp: new Date()
            }]
        });

        res.status(201).json({ success: true, data: session });
    } catch (err) {
        console.error('Start Session Error:', err);
        res.status(500).json({ success: false, error: 'Failed to start simulation session' });
    }
};

// Send Message & Get Response
exports.sendMessage = async (req, res) => {
    try {
        const { sessionId, message } = req.body;

        const session = await ChatSession.findById(sessionId);
        if (!session) return res.status(404).json({ success: false, error: 'Session not found' });

        if (session.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ success: false, error: 'Unauthorized' });
        }

        // 1. Add User Message
        session.messages.push({ sender: 'user', text: message });

        // 2. Real-Time Analysis (Sidecar)
        const analysis = await chatService.analyzeTurn(message, {
            goal: session.archetype.goal,
            mood: session.persona.mood
        });

        // Attach analysis to the user's message
        session.messages[session.messages.length - 1].analysis = analysis;

        // 3. Generate Actor Response
        const history = session.messages.map(m => ({ sender: m.sender, text: m.text }));
        const aiResponseText = await chatService.generateResponse(history, {
            name: session.persona.name,
            role: session.persona.role,
            mood: session.persona.mood,
            context: session.persona.instructions
        });

        // 4. Add AI Message
        session.messages.push({ sender: 'ai', text: aiResponseText });

        // 5. Update Metrics (Rolling Average)
        const userMsgs = session.messages.filter(m => m.sender === 'user' && m.analysis);
        if (userMsgs.length > 0) {
            session.metrics.averageEmpathy = userMsgs.reduce((acc, m) => acc + (m.analysis.empathy || 0), 0) / userMsgs.length;
            session.metrics.averageProfessionalism = userMsgs.reduce((acc, m) => acc + (m.analysis.professionalism || 0), 0) / userMsgs.length;
            session.metrics.messageCount = userMsgs.length;
        }

        await session.save();

        res.status(200).json({
            success: true,
            data: {
                message: aiResponseText,
                analysis: analysis,
                metrics: session.metrics
            }
        });

    } catch (err) {
        console.error('Send Message Error:', err);
        res.status(500).json({ success: false, error: 'Failed to process message' });
    }
};

// Get Session History
exports.getSession = async (req, res) => {
    try {
        const session = await ChatSession.findById(req.params.id);
        if (!session) return res.status(404).json({ success: false, error: 'Session not found' });

        if (session.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ success: false, error: 'Unauthorized' });
        }

        res.status(200).json({ success: true, data: session });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Failed to retrieve session' });
    }
};

// End Session and Generate Final Report
exports.endSession = async (req, res) => {
    try {
        const { sessionId } = req.body;
        const session = await ChatSession.findById(sessionId);

        if (!session) return res.status(404).json({ success: false, error: 'Session not found' });
        if (session.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ success: false, error: 'Unauthorized' });
        }

        // Mark as complete
        session.status = 'completed';
        session.completedAt = new Date();

        // Generate Final Summary
        const report = {
            sessionId: session._id,
            persona: {
                name: session.persona.name,
                role: session.persona.role,
                archetype: session.archetype.type
            },
            performance: {
                empathy: Math.round(session.metrics.averageEmpathy),
                professionalism: Math.round(session.metrics.averageProfessionalism),
                messageCount: session.metrics.messageCount,
                duration: Math.round((session.completedAt - session.createdAt) / 60000) // minutes
            },
            grade: getGrade(session.metrics.averageEmpathy, session.metrics.averageProfessionalism),
            feedback: generateFeedback(session.metrics.averageEmpathy, session.metrics.averageProfessionalism)
        };

        session.finalReport = report;
        await session.save();

        res.status(200).json({ success: true, data: report });
    } catch (err) {
        console.error('End Session Error:', err);
        res.status(500).json({ success: false, error: 'Failed to end session' });
    }
};

// Helper: Calculate Grade
function getGrade(empathy, professionalism) {
    const avg = (empathy + professionalism) / 2;
    if (avg >= 80) return 'A';
    if (avg >= 70) return 'B';
    if (avg >= 60) return 'C';
    if (avg >= 50) return 'D';
    return 'F';
}

// Helper: Generate Feedback
function generateFeedback(empathy, professionalism) {
    const feedback = [];

    if (empathy >= 75) feedback.push('Excellent emotional awareness');
    else if (empathy >= 50) feedback.push('Moderate empathy shown');
    else feedback.push('Consider acknowledging emotions more');

    if (professionalism >= 75) feedback.push('Maintained strong professional tone');
    else if (professionalism >= 50) feedback.push('Generally professional');
    else feedback.push('Work on maintaining composure');

    return feedback.join('. ') + '.';
}
