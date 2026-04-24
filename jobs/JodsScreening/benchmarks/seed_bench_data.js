const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../backend/.env') });
const mongoose = require('mongoose');
const crypto = require('crypto');
const Application = require('../backend/models/Application');
const Job = require('../backend/models/Job');
const User = require('../backend/models/User');

async function seedMassData() {
    console.log("--- Starting Mass Data Seeding (1,000 Candidates) ---");

    try {
        await mongoose.connect(process.env.MONGO_URI);

        const job = await Job.findOne();
        if (!job) {
            console.error("No job found to attach candidates to.");
            return;
        }

        const hr = await User.findOne({ role: 'hr' });
        const existingCount = await Application.countDocuments({ job: job._id });

        const target = 1000;
        const toCreate = target - existingCount;

        if (toCreate <= 0) {
            console.log(`Job already has ${existingCount} candidates. Skipping seed.`);
            return;
        }

        console.log(`Creating ${toCreate} mock candidates for "${job.title}"...`);

        const batchSize = 100;
        for (let i = 0; i < toCreate; i += batchSize) {
            const batch = [];
            for (let j = 0; j < Math.min(batchSize, toCreate - i); j++) {
                const id = crypto.randomBytes(4).toString('hex');
                batch.push({
                    job: job._id,
                    candidate: new mongoose.Types.ObjectId(), // Unique random candidate ID
                    candidateName: `Mock Candidate ${id}`,
                    candidateEmail: `mock_${id}@example.com`,
                    candidatePhone: `+1234567890`,
                    yearsExperience: Math.floor(Math.random() * 10),
                    status: 'applied',
                    assessmentStatus: 'pending'
                });
            }
            await Application.insertMany(batch);
            console.log(`Inserted ${i + batch.length} / ${toCreate}...`);
        }

        console.log("Seeding complete.");

    } catch (err) {
        console.error("Seeding failed:", err.message);
    } finally {
        await mongoose.connection.close();
        process.exit(0);
    }
}

seedMassData();
