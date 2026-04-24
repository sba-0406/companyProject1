const aiService = require('./aiService');

// 1. ARCHETYPES (Hardcoded Goals)
const ARCHETYPES = {
    MANAGER: [
        { type: 'CRISIS', goal: 'De-escalate panic and provide a clear recovery plan.', intensity: 'High' },
        { type: 'NEGOTIATION', goal: 'Retain a high-value employee who wants to resign.', intensity: 'Medium' },
        { type: 'PERFORMANCE', goal: 'Deliver negative feedback to a defensive employee.', intensity: 'Medium' }
    ],
    DEVELOPER: [
        { type: 'TECHNICAL_DISPUTE', goal: 'Advocate for a technical decision against a stubborn senior.', intensity: 'High' },
        { type: 'SAVING_PROJECT', goal: 'Convince a PM to cut scope to meet a deadline.', intensity: 'Medium' }
    ]
};

// 2. Persona Generator
exports.generatePersona = async (role) => {
    const roleArchetypes = ARCHETYPES[role.toUpperCase()] || ARCHETYPES['MANAGER'];
    const archetypeTemplate = roleArchetypes[Math.floor(Math.random() * roleArchetypes.length)];
    const archetype = { ...archetypeTemplate, role }; // Inject role into archetype

    const prompt = `System Design: Persona Generation.
Create a detailed persona for a "${archetype.type}" simulation.
Target User Role: ${role}
Goal: ${archetype.goal}
Intensity: ${archetype.intensity}

Generate a character who will OPPOSE the user.
- Name: A realistic corporate name.
- Role: Who are they? (e.g. Upset Client, Defensive Dev).
- Mood: Their emotional state (e.g. Frustrated, Arrogant, Panicked).
- Mission Briefing: A clear setup for the user.
    - Situation: What just happened? (e.g. "Production server is down since 2AM")
    - Objective: What must the user achieve?
    - Stakes: What happens if they fail?
- FirstMessage: An opening line that immediately creates tension.

Return ONLY valid JSON:
{
  "name": "Name",
  "role": "Job Title",
  "mood": "Adjective",
  "briefing": {
    "situation": "Context description",
    "objective": "Clear goal",
    "stakes": "Consequences"
  },
  "firstMessage": "Opening line",
  "archetype": ${JSON.stringify(archetype)}
}`;

    // Mock fallback
    const fallback = {
        name: "Sarah Connors",
        role: "Senior Developer",
        mood: "Frustrated",
        briefing: {
            situation: "Sarah refuses to document her code, claiming it 'documents itself'. The team is blocked.",
            objective: "Convince Sarah to commit to writing documentation by end of week.",
            stakes: "If she refuses, the junior developers will quit."
        },
        firstMessage: "I don't have time for this documentation nonsense! I have to ship code!",
        archetype
    };

    try {
        const text = await aiService.generateContent(prompt);
        const data = aiService.extractJSON(text);
        return { ...data, archetype }; // Ensure archetype structure is preserved
    } catch (e) {
        return fallback;
    }
};

// 3. The Actor (Chat Response)
exports.generateResponse = async (history, persona) => {
    const turnNumber = Math.floor(history.length / 2);
    const responseStyles = [
        "Be direct and defensive",
        "Deflect or change the subject slightly",
        "Show a brief emotional reaction first, then respond",
        "Ask a challenging question back",
        "Make a sarcastic or frustrated comment"
    ];
    const style = responseStyles[turnNumber % responseStyles.length];

    const prompt = `Roleplay Mode: ACTIVE.
You are "${persona.name}", a ${persona.role}.
Mood: ${persona.mood}.
Context: ${persona.context}.
Goal: You must OPPOSE the user. Do not give in easily. Be difficult but realistic.

Response Style for this turn: ${style}

Conversation History:
${history.map(m => `${m.sender.toUpperCase()}: ${m.text}`).join('\n')}

Reply as ${persona.name}. Keep it SHORT (1-2 sentences max). Sound human and conversational, NOT corporate.
VARY your responses - don't repeat phrases. Use different sentence structures each time.
Response:`;

    try {
        const response = await aiService.generateContent(prompt);
        return response.trim().replace(/^"|"$/g, '');
    } catch (e) {
        return "...";
    }
};

// 4. The Analyzer (Sidecar)
exports.analyzeTurn = async (lastUserMessage, context) => {
    const prompt = `Real-Time Analysis.
Evaluate the User's last message: "${lastUserMessage}"
Context: User is trying to "${context.goal}".
Opponent is "${context.mood}".

Rate the User (0-100):
- Empathy: Did they acknowledge feelings?
- Professionalism: Did they stay calm?
- Strategy: did they move towards the goal?

Return ONLY valid JSON:
{
  "empathy": 0-100,
  "professionalism": 0-100,
  "notes": "One short insight (max 10 words)"
}`;

    const fallback = { empathy: 50, professionalism: 50, notes: "Neutral response." };

    try {
        const text = await aiService.generateContent(prompt);
        return aiService.extractJSON(text);
    } catch (e) {
        return fallback;
    }
};

// ========================================
// MULTI-SCENARIO DOJO SYSTEM
// ========================================

const { getCompetenciesForRole } = require('../config/roleCompetencies');

// Scenario templates for each role (3 scenarios per role)
const SCENARIO_TEMPLATES = {
    Manager: [
        { stakeholder: 'Angry Client', description: 'A major client is furious about a missed deadline and threatens to cancel the contract.' },
        { stakeholder: 'Underperforming Team Member', description: 'A team member consistently misses deadlines and seems disengaged.' },
        { stakeholder: 'Executive in Budget Crisis', description: 'The CFO demands a 30% budget cut to your department immediately.' }
    ],
    Developer: [
        { stakeholder: 'Stubborn Senior Developer', description: 'A senior dev insists on a technical approach you believe is wrong.' },
        { stakeholder: 'Stressed Project Manager', description: 'The PM wants to add more features despite the tight deadline.' },
        { stakeholder: 'Junior Developer Struggling', description: 'A junior team member is overwhelmed and considering quitting.' }
    ],
    HR: [
        { stakeholder: 'Harassment Complaint', description: 'An employee reports feeling harassed by their manager.' },
        { stakeholder: 'Salary Negotiation', description: 'A top performer demands a 40% raise or they will leave.' },
        { stakeholder: 'Team Conflict', description: 'Two team members refuse to work together after a public argument.' }
    ],
    Executive: [
        { stakeholder: 'Board Member Questioning Strategy', description: 'A board member publicly challenges your Q3 strategy in a meeting.' },
        { stakeholder: 'Major Client Escalation', description: 'Your biggest client CEO calls threatening to switch to a competitor.' },
        { stakeholder: 'Union Negotiation', description: 'Union representatives demand better benefits during a cost-cutting phase.' }
    ]
};

// Generate 3 unique scenarios for a role
exports.generateScenarioSet = function (role) {
    const templates = SCENARIO_TEMPLATES[role] || SCENARIO_TEMPLATES.Manager;
    return templates.map((template, index) => ({
        scenarioNumber: index + 1,
        stakeholder: template.stakeholder,
        description: template.description,
        status: index === 0 ? 'in-progress' : 'pending',
        moodLevel: 30, // Start with low mood (angry/tense)
        resolution: null
    }));
};

// Generate dynamic MCQ options based on context
exports.generateMCQOptions = async function (history, scenarioDescription, currentMood) {
    const latestInteraction = history.length > 0 ? history[history.length - 1].text : "Starting the conversation.";
    const conversationSummary = history.map(m => `${m.sender.toUpperCase()}: ${m.text}`).join('\n');

    const prompt = `You are a leadership development expert. You must generate 3 distinct leadership options for a user to choose from.
    
    STEP 1: ANALYZE CONTEXT
    - Scenario: ${scenarioDescription}
    - Mood: ${currentMood}/100
    - Interaction History:
    ${conversationSummary}

    PERSONA GUIDELINES:
    1. THE RELATIONSHIP-FIRST LEADER: Focus on empathy. Use phrases like "I understand how you feel," "How can I support you?".
    2. THE RESULTS-FIRST LEADER: Focus on data and milestones. Use phrases like "The project timeline requires...", "Looking at the data...".
    3. THE BOUNDARY-FIRST LEADER: Focus on professional expectations and standards. Use phrases like "I expect professional behavior," "Let's set a clear boundary."

    GROUNDING RULES:
    - You MUST answer specific questions asked by the stakeholder in the history.
    - You MUST use names or specific facts mentioned in the history.
    - NO GENERIC ADVICE. Ensure options are a direct response to: "${latestInteraction}".
    
    Return ONLY a valid JSON array. NO COMMENTS.
    JSON FORMAT:
    [
      { 
        "text": "The actual response text...", 
        "approach": "Relationship/Results/Boundary", 
        "moodDelta": <number>,
        "scores": { "competency1": <0-100>, "competency2": <0-100>, "competency3": <0-100>, "competency4": <0-100>, "competency5": <0-100>, "competency6": <0-100> }
      }
    ]`;

    try {
        const response = await aiService.generateContent(prompt);
        return aiService.extractJSON(response);
    } catch (e) {
        // Fallback options
        return [
            {
                text: "I hear your concerns and want to ensure we find a solution that works for everyone.",
                approach: "Relationship",
                moodDelta: 10,
                scores: { competency1: 90, competency2: 70, competency3: 80, competency4: 85, competency5: 80, competency6: 75 }
            },
            {
                text: "Let's look at the data and project goals to see how we can optimize this situation.",
                approach: "Results",
                moodDelta: 5,
                scores: { competency1: 70, competency2: 85, competency3: 90, competency4: 75, competency5: 75, competency6: 80 }
            },
            {
                text: "While I understand the frustration, we must adhere to our professional standards and timelines.",
                approach: "Boundary",
                moodDelta: 15,
                scores: { competency1: 65, competency2: 75, competency3: 70, competency4: 80, competency5: 90, competency6: 85 }
            }
        ];
    }
};

// Evaluate response and return role-specific competency scores
exports.evaluateResponse = async function (userText, role, context, history = []) {
    const competencies = getCompetenciesForRole(role);
    const conversationSummary = history.map(m => `${m.sender.toUpperCase()}: ${m.text}`).join('\n');

    const prompt = `Evaluate leadership response quality (0-100).
    
    1. ${competencies[0]}
    2. ${competencies[1]}
    3. ${competencies[2]}
    4. ${competencies[3]}
    5. ${competencies[4]}
    6. ${competencies[5]}

    RESPONSE TO GRADE: "${userText}"
    CONTEXT: ${context}

    Return ONLY JSON:
    {"1": <score>, "2": <score>, "3": <score>, "4": <score>, "5": <score>, "6": <score>}`;

    try {
        const response = await aiService.generateContent(prompt);
        return aiService.extractJSON(response);
    } catch (e) {
        console.error(`[AI EVAL ERROR] Failed to evaluate response: ${e.message}`);
        // Fallback: varied moderate scores instead of hardcoded 60s
        return {
            competency1: 72,
            competency2: 68,
            competency3: 75,
            competency4: 65,
            competency5: 70,
            competency6: 72
        };
    }
};

// Update mood level based on response impact
exports.updateMoodLevel = function (currentMood, moodDelta) {
    const newMood = currentMood + moodDelta;
    // Clamp between 0 and 100
    return Math.max(0, Math.min(100, newMood));
};

// Check if scenario is resolved (mood >= 55)
exports.checkResolution = function (moodLevel) {
    return moodLevel >= 55;
};
