const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../backend/.env') });
const ai = require('../backend/services/aiService');

async function benchmarkAI() {
    // A very hard topic that might trigger rejections or slow generation
    const skill = "Advanced Quantum Superposition in Distributed Systems";
    const count = 3;
    const difficulty = "Expert";

    console.log("--- Starting AI Benchmarking (Hard Skill Test) ---");
    console.log(`Target: Generating ${count} questions for "${skill}" at "${difficulty}" difficulty.`);

    const start = Date.now();
    try {
        const results = await ai.generateTechnicalQuestions(skill, count, difficulty);
        const duration = Date.now() - start;

        console.log("\n[RESULTS]");
        console.log(`- Questions Generated: ${results.length}`);
        console.log(`- Total Time: ${duration}ms`);

    } catch (err) {
        console.error("Benchmark failed:", err.message);
    }
}

benchmarkAI().then(() => process.exit(0)).catch(err => {
    console.error(err);
    process.exit(1);
});
