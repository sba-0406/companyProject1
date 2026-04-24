const aiService = require('./aiService');

/**
 * AI Generation Service for Admin Portal
 * Provides AI-assisted content generation for scenarios
 */

// Helper to generate and parse JSON + inject source info
async function generateAndParse(prompt, fallback) {
  try {
    const text = await aiService.generateContent(prompt);
    const data = aiService.extractJSON(text);
    return { ...data, aiSource: aiService.getSource() };
  } catch (err) {
    console.error('AI Generation/Parsing Error:', err);
    return { ...fallback, aiSource: aiService.getSource() };
  }
}

// Generate 3 scenario title suggestions
exports.generateScenarioTitles = async (role, difficulty) => {
  const prompt = `You are an expert scenario designer for professional simulations.
Generate 3 highly creative, diverse, and professional scenario titles for a ${role} at ${difficulty} difficulty level.

Requirements:
- Titles must be distinct from each other.
- Avoid generic titles like "Challenge" or "Task".
- Use realistic corporate, technical, or interpersonal contexts.
- ${difficulty === 'Easy' ? 'Focus on routine but important tasks.' : ''}
- ${difficulty === 'Medium' ? 'Include complexity, ambiguity, and multiple stakeholders.' : ''}
- ${difficulty === 'Hard' ? 'Present high-stakes, crisis-level situations with ethical dilemmas or massive impact.' : ''}

Return ONLY valid JSON:
{
  "suggestions": [
    { "title": "Creative Title Here", "confidence": 0.9 }
  ]
}`;

  const fallback = {
    suggestions: [
      { title: `${role} Strategic Initiative - ${difficulty}`, confidence: 0.5 },
      { title: `Crisis Management: ${role} Case`, confidence: 0.5 },
      { title: `${role} Professional Excellence`, confidence: 0.5 }
    ]
  };

  return generateAndParse(prompt, fallback);
};

// Generate scenario description
exports.generateDescription = async (role, difficulty, title) => {
  const prompt = `Write a compelling, immersive workplace scenario description for: "${title}"

User Role: ${role}
Simulation Difficulty: ${difficulty}

Requirements:
- 3 paragraphs of high-quality narrative.
- Paragraph 1: Set the scene - what just happened? What is the atmosphere?
- Paragraph 2: Introduce the complication - what is the conflict or unexpected turn?
- Paragraph 3: Define the stakes - what happens if this isn't handled correctly?
- Use specific details (names of tools, departments, or metrics) to make it feel real.
- DO NOT provide the answer or the "right" way to handle it.

Return ONLY valid JSON:
{
  "description": "The detailed narrative here...",
  "confidence": 0.95
}`;

  const fallback = {
    description: `As a ${role}, you have been assigned to handle "${title}". This ${difficulty.toLowerCase()} situation requires your immediate attention and strategic thinking to avoid negative project impact.`,
    confidence: 0.5
  };

  return generateAndParse(prompt, fallback);
};

// Generate question variations for a stage
exports.generateQuestions = async (description, stageType, previousStages = []) => {
  const narrativeContext = previousStages.length > 0
    ? `The story so far has included these stages: ${previousStages.join(' -> ')}`
    : `This is the starting point of the story.`;

  const prompt = `Analyze this scenario: "${description}"
${narrativeContext}

Generate 5 distinct, high-impact questions/prompts for a ${stageType} stage.

CRITICAL: NARRATIVE CONTINUITY
- If there are previous stages, the new questions MUST be a logical sequel or consequence of the previous ones.
- The employee must feel like they are "living" in a continuous situation, not starting a new one each time.
- The questions should escalate or shift focus based on what happened before.

Requirements:
- Each question must force a decision or a specific response.
- Use variety in tone (e.g., a direct question from a boss, a panicked message from a junior, or a formal system alert).

Return ONLY valid JSON:
{
  "questions": [
    { "text": "Specific question text", "confidence": 0.9 }
  ]
}`;

  const fallback = {
    questions: [
      { text: 'How do you respond to this situation?', confidence: 0.5 },
      { text: 'What is your immediate priority?', confidence: 0.5 },
      { text: 'Which stakeholder do you contact first?', confidence: 0.5 }
    ]
  };

  return generateAndParse(prompt, fallback);
};


// Generate options for MCQ/Ranking
exports.generateOptions = async (question, count = 4) => {
  const prompt = `For this simulation question: "${question}"
Generate ${count} highly realistic and nuanced answer options.

Requirements:
- 1 Excellent Option: The "Gold Standard" response.
- 1 Good Option: Technically correct but lacks nuance or foresight.
- 1 Average/Mediocre Option: A "bandage" solution that doesn't fix the root cause.
- 1 Poor/Incorrect Option: A common pitfall or an unprofessional reaction.
- Provide a brief logic for each why it gets its suggested score.

Return ONLY valid JSON:
{
  "options": [
    {
      "text": "Option full text",
      "reasoning": "Brief explanation of quality",
      "suggestedScore": 0-10,
      "confidence": 0.9
    }
  ]
}`;

  const fallback = {
    options: [
      { text: 'Address the issue immediately with the team.', reasoning: 'Proactive approach', suggestedScore: 9, confidence: 0.5 },
      { text: 'Escalate to management for guidance.', reasoning: 'Safe but avoids responsibility', suggestedScore: 6, confidence: 0.5 },
      { text: 'Wait for more data before acting.', reasoning: 'Could lead to delays', suggestedScore: 4, confidence: 0.5 },
      { text: 'Ignore the request for now.', reasoning: 'Unprofessional', suggestedScore: 1, confidence: 0.5 }
    ]
  };

  return generateAndParse(prompt, fallback);
};

// Suggest score for an option
exports.suggestScore = async (option, competencies = []) => {
  const prompt = `Expert Evaluation.
Evaluate this simulation response option: "${option}"
Target Competencies: ${competencies.join(', ') || 'General Performance'}

Score it from 0 (Disastrous) to 10 (Masterful).
Explain EXACTLY why it deserves this score based on professional standards.

Return ONLY valid JSON:
{
  "score": 0-10,
  "reasoning": "Professional justification",
  "confidence": 0.85
}`;

  const fallback = { score: 5, reasoning: 'Standard assessment', confidence: 0.5 };

  return generateAndParse(prompt, fallback);
};

// Suggest competencies for an option
exports.suggestCompetencies = async (option) => {
  const prompt = `Analyze this simulated action: "${option}"
Identify the top 3-5 core professional competencies this action demonstrates or requires.

Return ONLY valid JSON:
{
  "competencies": ["Communication", "Stakeholder Management", etc],
  "confidence": 0.9
}`;

  const fallback = { competencies: ["Decision Making", "Problem Solving"], confidence: 0.5 };

  return generateAndParse(prompt, fallback);
};

// Validate if scenario matches difficulty level
exports.validateDifficulty = async (scenario) => {
  const prompt = `Difficulty Auditor.
Evaluate if this scenario matches the "${scenario.difficulty}" level.

Title: ${scenario.title}
Story: ${scenario.description}

Criteria:
- Easy: Linear, common, clear right answer.
- Medium: Ambiguous, involves trade-offs.
- Hard: Crisis, conflicting needs, high-stress, systemic impact.

Return ONLY valid JSON:
{
  "isValid": boolean,
  "actualDifficulty": "Easy|Medium|Hard",
  "reasoning": "Reasoning for the audit result",
  "confidence": 0.9
}`;

  const fallback = { isValid: true, actualDifficulty: scenario.difficulty, reasoning: 'Manual review suggested', confidence: 0.5 };

  return generateAndParse(prompt, fallback);
};

// Check for duplicate/similar scenarios
exports.checkDuplicates = async (newScenario, existingScenarios) => {
  const existingTitles = existingScenarios.map(s => s.title).join(', ');
  const prompt = `Plagiarism & Repetition Check.
New Scenario: "${newScenario.title}" - "${newScenario.description.substring(0, 100)}..."
Existing Library: ${existingTitles}

Return ONLY valid JSON:
{
  "isDuplicate": boolean,
  "similarityScore": 0.0-1.0,
  "mostSimilarTo": "title or null",
  "reasoning": "Comparison analysis"
}`;

  const fallback = { isDuplicate: false, similarityScore: 0, mostSimilarTo: null, reasoning: 'Comparison skipped' };

  return generateAndParse(prompt, fallback);
};

// Analyze score distribution balance
exports.analyzeScoreBalance = async (options) => {
  const optionsText = options.map((o, i) => `${i + 1}. "${o.text}" (Score: ${o.score})`).join('\n');
  const prompt = `Analyze the score distribution of these simulation options:
${optionsText}

Is there a clear "winning" path and a "failing" path? Is the spread too narrow?

Return ONLY valid JSON:
{
  "isBalanced": boolean,
  "suggestions": ["suggestion 1", "suggestion 2"],
  "confidence": 0.9
}`;

  const fallback = { isBalanced: true, suggestions: ["Consider wider score spread"], confidence: 0.5 };

  return generateAndParse(prompt, fallback);
};

// Validate consistency between Role, Difficulty, and Content
exports.validateConsistency = async (data) => {
  const stagesText = (data.stages || []).map((s, i) =>
    `[Stage ${i + 1} - ${s.type.toUpperCase()}]
Prompt: ${s.prompt}
Options: ${(s.options || []).join(' | ')}`
  ).join('\n\n');

  const prompt = `AI Audit: Scenario Consistency Checker.
Analyze if these elements align professionally:
- Job Role: ${data.jobRole}
- Difficulty: ${data.difficulty}
- Title: ${data.title}
- Description: ${data.description}

STAGES UNDER REVIEW:
${stagesText || 'No stages provided yet.'}

Check for:
1. Role-Task Alignment: Is this something a ${data.jobRole} actually does?
2. Difficulty Accuracy: Does the complexity match "${data.difficulty}"?
3. Narrative Logic: Does the title, description, and stages form a cohesive story?
4. Option Quality: Do the MCQ/Ranking options actually answer the question? Are they professional or too obvious?

Return ONLY valid JSON:
{
  "isConsistent": boolean,
  "mismatches": [
    { "type": "Role|Difficulty|Narrative|Options", "issue": "Description of mismatch", "severity": "Warning|Critical" }
  ],
  "suggestions": ["specific improvement 1", "2"],
  "confidence": 0.95
}`;

  const fallback = { isConsistent: true, mismatches: [], suggestions: ["Manual verification recommended"], confidence: 0.5 };
  return generateAndParse(prompt, fallback);
};


// Refine/Polish user-provided content
exports.refineText = async (type, currentContent, context = {}) => {
  const narrativeContext = (context.previousStages || []).length > 0
    ? `Narrative Flow: ${context.previousStages.join(' -> ')} -> [CURRENT: ${currentContent}]`
    : `Initial Content: ${currentContent}`;

  const prompt = `AI Editor: Professional Content Refinement.
User wants to refine a "${type}" for a professional simulation.

Current Content: "${currentContent}"
Context: Role: ${context.role || 'Professional'}, Difficulty: ${context.difficulty || 'Intermediate'}
${narrativeContext}

Instructions:
- Improve the professional tone and vocabulary.
- NARRATIVE CHAINING: Ensure this refined content flows naturally from the previous stages (if any). It should feel like a cohesive part of an ongoing story.
- Maintain the original intent but make it "pop" with corporate/technical nuance.
- For descriptions, ensure it follows a narrative arc (Scene, Complication, Stakes).

Return ONLY valid JSON:
{
  "refinedContent": "The polished version of the text",
  "changesMade": ["description of change 1", "2"],
  "confidence": 0.98
}`;

  const fallback = { refinedContent: currentContent, changesMade: ["AI Refinement skipped - returning original"], confidence: 0.5 };
  return generateAndParse(prompt, fallback);
};

// Apply fixes based on Audit report
exports.applyAuditFixes = async (scenario, auditReport) => {
  const prompt = `AI Architect: Scenario Repair.
Fix the consistency issues identified in this audit report.

CURRENT SCENARIO:
- Title: ${scenario.title}
- Role: ${scenario.jobRole}
- Difficulty: ${scenario.difficulty}
- Description: ${scenario.description}
- Stages: ${(scenario.stages || []).map((s, i) => `[${i + 1}] ${s.prompt}`).join(' | ')}

AUDIT REPORT:
- Mismatches: ${JSON.stringify(auditReport.mismatches)}
- Suggestions: ${JSON.stringify(auditReport.suggestions)}

Task: Rewrite the Title, Description, and Stages to resolve ALL mismatches. Maintain the Role and Difficulty as constants. Ensure the narrative is cohesive and professional.

Return ONLY valid JSON:
{
  "title": "New Title",
  "description": "New Description",
  "stages": [
    { "prompt": "New prompt 1" }
  ],
  "fixSummary": "Briefly describe what was corrected"
}`;

  const fallback = { title: scenario.title, description: scenario.description, stages: scenario.stages, fixSummary: "No changes applied" };
  return generateAndParse(prompt, fallback);
};
