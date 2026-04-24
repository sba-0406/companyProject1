const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../backend/.env') });
const ai = require('../backend/services/aiService');

async function benchmarkAI() {
    const skill = "React Hooks (Standard vs Advanced)";
    const count = 5;
    const difficulty = "Intermediate";

    console.log("--- Starting AI Benchmarking (Critic-Pass Validation) ---");
    console.log(`Target: Generating ${count} questions for "${skill}" at "${difficulty}" difficulty.`);

    const start = Date.now();
    try {
        const results = await ai.generateTechnicalQuestions(skill, count, difficulty);
        const duration = Date.now() - start;

        console.log("\n[RESULTS]");
        console.log(`- Questions Generated: ${results.length}`);
        console.log(`- Total Time: ${duration}ms`);

        const health = ai.getGovernanceData ? ai.getGovernanceData() : null;

        if (health) {
            console.log("\n[GOVERNANCE DATA]");
            console.log(`- Total AI Calls: ${health.totalCalls || 0}`);
            console.log(`- Critic Rejections (Fallbacks): ${health.fallbackCount || 0}`);
            console.log(`- Success Rate: ${health.successRate || 0}%`);

            // Hallucination Reduction Calculation:
            // Every fallback represents a question that the critic caught and rejected.
            // (Rejections / (Success + Rejections)) approx hallucination rate of base model
            const total = (health.successCalls || 0) + (health.fallbackCount || 0);
            const reduction = health.fallbackCount > 0 ? (health.fallbackCount / total) * 100 : 0;
            console.log(`- Estimated Hallucination Reduction: ${reduction.toFixed(1)}%`);
        } else {
            console.log("\n[STAT] Note: ai.getGovernanceData() not available or didn't return data.");
        }

    } catch (err) {
        console.error("Benchmark failed:", err.message);
    }
}

benchmarkAI().then(() => process.exit(0)).catch(err => {
    console.error(err);
    process.exit(1);
});
