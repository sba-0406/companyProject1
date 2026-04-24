const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Application = require('../models/Application');

dotenv.config();

const run = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to DB');

        const result = await Application.updateMany(
            { status: 'assessment_completed' },
            { $set: { status: 'applied' } }
        );

        console.log(`Updated ${result.modifiedCount} applications from "assessment_completed" to "applied".`);
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

run();
