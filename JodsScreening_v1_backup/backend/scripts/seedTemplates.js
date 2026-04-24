const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });

const NotificationTemplate = require('../models/NotificationTemplate');
const connectDB = require('../config/db');

const templates = [
    // CANDIDATE TEMPLATES
    {
        name: 'application_received',
        category: 'CANDIDATE',
        subject: 'Application Received: {{jobTitle}}',
        body: 'Hello {{candidateName}},\n\nWe have successfully received your application for the {{jobTitle}} position. Our team will review your profile and get back to you soon.',
        placeholders: ['candidateName', 'jobTitle'],
        description: 'Sent automatically after application submission.'
    },
    {
        name: 'assessment_invite',
        category: 'CANDIDATE',
        subject: 'Action Required: Assessment Invitation for {{jobTitle}}',
        body: 'Hi {{candidateName}},\n\nYou are invited to complete our scenario-based assessment for the {{jobTitle}} role. This simulation will help us understand your core competencies.\n\nPlease click the "Start Assessment" button on your dashboard to begin.',
        placeholders: ['candidateName', 'jobTitle'],
        description: 'HR invitation to the simulation.'
    },
    {
        name: 'interview_scheduled',
        category: 'CANDIDATE',
        subject: 'Interview Scheduled: {{jobTitle}}',
        body: 'Great news {{candidateName}}!\n\nYour interview for the {{jobTitle}} position has been scheduled for {{date}} at {{time}}. Please ensure you are available at this time.',
        placeholders: ['candidateName', 'jobTitle', 'date', 'time'],
        description: 'Confirmation of interview slot.'
    },
    {
        name: 'shortlisted',
        category: 'CANDIDATE',
        subject: 'Update on your application for {{jobTitle}}',
        body: 'Hello {{candidateName}},\n\nWe are pleased to inform you that you have been shortlisted for the next stage of our hiring process for the {{jobTitle}} role. We will reach out with further details shortly.',
        placeholders: ['candidateName', 'jobTitle'],
        description: 'Notification of shortlist status.'
    },
    {
        name: 'rejected',
        category: 'CANDIDATE',
        subject: 'Application Status: {{jobTitle}}',
        body: 'Dear {{candidateName}},\n\nThank you for your interest in the {{jobTitle}} position. After careful consideration, we have decided to move forward with other candidates at this time. We wish you the best in your job search.',
        placeholders: ['candidateName', 'jobTitle'],
        description: 'Professional rejection message.'
    },

    // HR TEMPLATES (Internal)
    {
        name: 'hr_new_application',
        category: 'HR',
        subject: 'New Application: {{candidateName}} for {{jobTitle}}',
        body: 'A new candidate, {{candidateName}} ({{yearsExperience}} years exp), has just applied for the {{jobTitle}} role. Please review their profile in the dashboard.',
        placeholders: ['candidateName', 'jobTitle', 'yearsExperience'],
        description: 'Internal alert for new submissions.'
    },
    {
        name: 'hr_assessment_complete',
        category: 'HR',
        subject: 'Assessment Complete: {{candidateName}} ({{jobTitle}})',
        body: '{{candidateName}} has finished the scenario simulation for {{jobTitle}}. Their overall fit score is {{score}}%. Check the "Assessment Results" for details.',
        placeholders: ['candidateName', 'jobTitle', 'score'],
        description: 'Alert when a simulation is finished.'
    },
    {
        name: 'hr_action_reminder',
        category: 'HR',
        subject: 'Action Required: Pending Applications for {{jobTitle}}',
        body: 'You have {{count}} applications for {{jobTitle}} that have been waiting for review for over 48 hours. Please take action to maintain candidate engagement.',
        placeholders: ['jobTitle', 'count'],
        description: 'Reminder for pending reviews.'
    }
];

const seedTemplates = async () => {
    try {
        await connectDB();

        // Clear existing templates
        await NotificationTemplate.deleteMany();
        console.log('[SEED] Cleared existing notification templates.');

        // Insert new templates
        await NotificationTemplate.insertMany(templates);
        console.log(`[SEED] Successfully seeded ${templates.length} templates.`);

        process.exit();
    } catch (error) {
        console.error('[SEED ERROR]', error.message);
        process.exit(1);
    }
};

seedTemplates();
