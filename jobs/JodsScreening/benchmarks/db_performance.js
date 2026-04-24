const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../backend/.env') });
const mongoose = require('mongoose');
const Application = require('../backend/models/Application');
const Job = require('../backend/models/Job');

async function benchmarkDB() {
    console.log("--- Starting Database Performance Benchmarking ---");

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected to MongoDB.");

        const totalApplications = await Application.countDocuments();
        console.log(`\n[DATABASE STATE]`);
        console.log(`- Total Application Records: ${totalApplications}`);

        const job = await Job.findOne();
        if (!job) {
            console.warn("No jobs found in the database. Please run the seed script first.");
            return;
        }

        console.log(`Benchmarking against Job: "${job.title}" (${job._id})`);

        // Test 1: Paginated Indexed Query (Status + Job)
        const startRaw = Date.now();
        const results = await Application.find({ job: job._id, status: 'applied' })
            .sort({ createdAt: -1 })
            .limit(10);
        const endRaw = Date.now();
        console.log(`\n[TEST 1: Paginated Indexed Query (Limit 10)]`);
        console.log(`- Latency: ${endRaw - startRaw}ms`);
        console.log(`- Results Found: ${results.length}`);

        // Test 2: Deep Explain Plan
        console.log(`\n[TEST 2: Explain Plan Analysis]`);
        const explain = await Application.find({ job: job._id, status: 'applied' })
            .sort({ createdAt: -1 })
            .limit(10)
            .explain("executionStats");

        const stats = explain.executionStats;
        console.log(`- Execution Time (Millis): ${stats.executionTimeMillis}`);
        console.log(`- Total Keys Examined: ${stats.totalKeysExamined}`);
        console.log(`- Total Docs Examined: ${stats.totalDocsExamined}`);

        const isIndexed = stats.totalDocsExamined <= results.length;
        console.log(`- Efficient Index Usage: ${isIndexed ? 'YES' : 'NO (Table Scan Detected)'}`);

        // Scability Projection (Logic-based)
        console.log(`\n[SCALABILITY PROJECTION]`);
        if (isIndexed) {
            console.log(`- Based on O(log N) index seeking, the system is architected to handle 10,000+ records with minimal latency increase.`);
        } else {
            console.log(`- WARN: No efficient index found. Latency will scale linearly O(N). Recommended to add index on { job: 1, status: 1 }.`);
        }

    } catch (err) {
        console.error("DB Benchmark failed:", err.message);
    } finally {
        await mongoose.connection.close();
        process.exit(0);
    }
}

benchmarkDB();
