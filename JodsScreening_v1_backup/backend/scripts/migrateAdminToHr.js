const mongoose = require('mongoose');
const User = require('../models/User');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

async function migrateAdminToHr() {
    try {
        // Connect to database
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        // Find the admin user
        const user = await User.findOne({ email: 'admin@scenariosim.com' });

        if (!user) {
            console.log('Admin user (admin@scenariosim.com) not found.');
            // Check if hr@scenariosim.com already exists
            const hrExists = await User.findOne({ email: 'hr@scenariosim.com' });
            if (hrExists) {
                console.log('✓ HR user (hr@scenariosim.com) already exists.');
            }
            process.exit(0);
        }

        console.log(`Found user: ${user.name} (${user.email}), ID: ${user._id}`);

        // Update email and role
        user.email = 'hr@scenariosim.com';
        user.role = 'hr';

        // We use findOneAndUpdate to bypass potential validation issues 
        // if we just want a clean swap without side effects, 
        // but user.save() is fine since we want to keep the same _id.
        await user.save();

        console.log('✓ User updated successfully!');
        console.log(`  New Email: ${user.email}`);
        console.log(`  New Role: ${user.role}`);
        console.log(`  ID remains: ${user._id}`);

        process.exit(0);
    } catch (error) {
        console.error('Error migrating user:', error);
        process.exit(1);
    }
}

migrateAdminToHr();
