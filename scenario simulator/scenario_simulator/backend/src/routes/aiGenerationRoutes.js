const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');
const {
    generateTitles,
    generateDescription,
    generateQuestions,
    generateOptions,
    suggestScore,
    suggestCompetencies,
    validateDifficulty,
    checkDuplicates,
    analyzeScoreBalance,
    validateConsistency,
    refineContent,
    applyFixes
} = require('../controllers/aiGenerationController');

// All routes require authentication
router.use(protect);

router.get('/diagnostics', (req, res, next) => {
    // Controller for diagnostics (accessible to any authenticated user)
    const { getDiagnostics } = require('../controllers/aiGenerationController');
    return getDiagnostics(req, res);
});

router.use(authorize('admin'));

router.post('/generate-titles', generateTitles);
router.post('/generate-description', generateDescription);
router.post('/generate-questions', generateQuestions);
router.post('/generate-options', generateOptions);
router.post('/suggest-score', suggestScore);
router.post('/suggest-competencies', suggestCompetencies);
router.post('/validate-difficulty', validateDifficulty);
router.post('/check-duplicates', checkDuplicates);
router.post('/analyze-score-balance', analyzeScoreBalance);
router.post('/validate-consistency', validateConsistency);
router.post('/refine-content', refineContent);
router.post('/apply-fixes', applyFixes);

module.exports = router;
