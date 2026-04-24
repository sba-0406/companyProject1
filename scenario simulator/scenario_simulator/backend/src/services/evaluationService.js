const Scenario = require('../models/Scenario');
const Rubric = require('../models/Rubric');
const SimulationResponse = require('../models/SimulationResponse');
const aiService = require('./aiService');

exports.evaluateResponse = async (userId, scenarioId, stageResponses) => {
  // 1. Fetch Scenario
  const scenario = await Scenario.findById(scenarioId).populate('rubric');
  if (!scenario) throw new Error('Scenario not found');

  // 2. Build full transcript for AI
  let transcript = "";
  const processedStageResponses = [];
  const competencyMap = {}; // Track scores by competency

  // 3. Calculate scores for each stage
  for (let i = 0; i < stageResponses.length; i++) {
    const userResponse = stageResponses[i];
    const stage = scenario.stages[userResponse.stageIndex];

    let scoreEarned = 0;
    let maxScore = 10;
    let aiResult = null; // For text response AI scoring
    const stageCompetencies = [];

    if (stage.type === 'mcq' && stage.scoreWeights && stage.scoreWeights.length > 0) {
      // MCQ: Find the selected option's score
      const selectedWeight = stage.scoreWeights.find(sw => sw.option === userResponse.answer);
      if (selectedWeight) {
        scoreEarned = selectedWeight.score || 0;
        stageCompetencies.push(...(selectedWeight.competencies || []));
      }
    } else if (stage.type === 'ranking' && stage.scoreWeights && stage.scoreWeights.length > 0) {
      // Ranking: Calculate weighted average based on order
      const rankedOptions = userResponse.answer.split(' | ');
      let totalWeight = 0;
      rankedOptions.forEach((opt, idx) => {
        const weight = stage.scoreWeights.find(sw => sw.option.trim() === opt.trim());
        if (weight) {
          // Higher rank = more weight (first choice gets full score, subsequent get less)
          const positionMultiplier = 1 - (idx * 0.2); // 100%, 80%, 60%, 40%, 20%
          totalWeight += (weight.score || 0) * Math.max(positionMultiplier, 0.2);
          stageCompetencies.push(...(weight.competencies || []));
        }
      });
      scoreEarned = Math.min(totalWeight / rankedOptions.length, 10);
    } else if (stage.type === 'text') {
      // Text: AI scores with rubric-based evaluation
      const rubricCriteria = scenario.rubric?.textScoringCriteria || [
        { criterion: "Addresses the prompt", maxPoints: 3, description: "Response is relevant and on-topic" },
        { criterion: "Provides specific details", maxPoints: 4, description: "Includes concrete examples or explanations" },
        { criterion: "Professional communication", maxPoints: 3, description: "Clear, respectful, and well-structured" }
      ];

      aiResult = await aiService.scoreTextResponse(userResponse.answer, stage.prompt, rubricCriteria);

      // Safety mechanisms
      const CONFIDENCE_THRESHOLD = 0.75;
      const MIN_SCORE = 4;
      const MAX_SCORE = 10;
      const DEFAULT_SCORE = 7;

      if (aiResult.confidence >= CONFIDENCE_THRESHOLD && aiResult.evidence && aiResult.evidence.length > 0) {
        // Use AI score with bounds
        scoreEarned = Math.max(MIN_SCORE, Math.min(MAX_SCORE, aiResult.totalScore));
      } else {
        // Fallback to default
        scoreEarned = DEFAULT_SCORE;
        aiResult.confidence = 0; // Mark as fallback
      }
      maxScore = 10;
    }

    // Track competencies
    stageCompetencies.forEach(comp => {
      if (!competencyMap[comp]) competencyMap[comp] = { total: 0, count: 0, evidence: [] };
      competencyMap[comp].total += scoreEarned;
      competencyMap[comp].count++;
    });

    // Build transcript
    transcript += `Stage ${i + 1} (${stage.type}):\nPrompt: ${stage.prompt}\nUser Answer: ${userResponse.answer}\nScore: ${scoreEarned}/${maxScore}\n\n`;

    // Build stage response object
    const stageResponseObj = {
      stageIndex: userResponse.stageIndex,
      type: userResponse.type,
      answer: userResponse.answer,
      scoreEarned: Math.round(scoreEarned * 10) / 10,
      maxScore
    };

    // Add AI reasoning for text responses
    if (stage.type === 'text' && aiResult) {
      stageResponseObj.aiReasoning = {
        confidence: aiResult.confidence,
        evidence: aiResult.evidence || [],
        breakdown: aiResult.breakdown || []
      };
    }

    processedStageResponses.push(stageResponseObj);
  }

  // 4. AI Impact Analysis (for qualitative feedback)
  const analysis = await aiService.analyzeImpact(transcript, scenario.jobRole);
  const summarizedPoints = await aiService.summarize(transcript);

  // 5. Merge AI competency scores with calculated scores
  Object.keys(competencyMap).forEach(comp => {
    const avgScore = competencyMap[comp].total / competencyMap[comp].count;
    competencyMap[comp].avgScore = Math.round(avgScore * 10) / 10;
  });

  // also add AI-identified competencies
  const aiScores = (analysis && analysis.scores) ? analysis.scores : [];
  aiScores.forEach(aiComp => {
    if (aiComp && aiComp.competency) {
      if (!competencyMap[aiComp.competency]) {
        competencyMap[aiComp.competency] = {
          avgScore: aiComp.score || 0,
          evidence: [aiComp.evidence || 'Observed via AI analysis'],
          count: 1
        };
      } else {
        if (aiComp.evidence) competencyMap[aiComp.competency].evidence.push(aiComp.evidence);
      }
    }
  });

  // 6. Build final competency scores
  const competencyScores = Object.keys(competencyMap).map(comp => ({
    competency: comp,
    score: competencyMap[comp].avgScore || 0,
    observedParameters: competencyMap[comp].evidence || [],
    status: (competencyMap[comp].avgScore || 0) >= 7 ? 'Observed' : ((competencyMap[comp].avgScore || 0) >= 4 ? 'Partial' : 'Not Observed'),
    feedback: competencyMap[comp].evidence.join('; ')
  }));

  // 7. Calculate total score (0-100 scale)
  const totalEarned = processedStageResponses.reduce((sum, s) => sum + s.scoreEarned, 0);
  const totalMax = processedStageResponses.reduce((sum, s) => sum + s.maxScore, 0);
  const totalScore = totalMax > 0 ? Math.round((totalEarned / totalMax) * 100) : 0;

  // 8. Save Response
  const response = await SimulationResponse.create({
    user: userId,
    scenario: scenarioId,
    stageResponses: processedStageResponses,
    totalScore,
    rawInput: transcript,
    aiSummarizedInput: summarizedPoints,
    competencyScores,
    aiFeedback: analysis.overallFeedback,
    aiMetadata: aiService.getSource()
  });

  return response;
};
