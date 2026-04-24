const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Scenario = require('../models/Scenario');
const Rubric = require('../models/Rubric');
const User = require('../models/User');

dotenv.config({ path: __dirname + '/../../../.env' });

async function seed() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('🧹 Clearing old data...');
    await Scenario.deleteMany({});
    await Rubric.deleteMany({});

    const r = await Rubric.create({
        name: 'General Assessment',
        competencies: [],
        textScoringCriteria: [
            {
                criterion: "Addresses the prompt",
                maxPoints: 3,
                description: "Response is relevant, on-topic, and directly answers the question",
                keywords: ["relevant", "specific", "addresses"]
            },
            {
                criterion: "Provides specific details",
                maxPoints: 4,
                description: "Includes concrete examples, technical details, or actionable steps",
                keywords: ["example", "specific", "detail", "step", "action"]
            },
            {
                criterion: "Professional communication",
                maxPoints: 3,
                description: "Clear, respectful, well-structured, and appropriate for the role",
                keywords: ["clear", "professional", "structured"]
            }
        ]
    });

    console.log('🌱 Creating 12 weighted scenarios...');
    const scenarios = [
        // ========== DEVELOPER ==========
        {
            title: 'Code Review Conflict',
            jobRole: 'Developer',
            difficulty: 'Easy',
            description: 'A junior developer submitted a PR with hardcoded credentials. How do you handle this in code review?',
            order: 1,
            rubric: r._id,
            stages: [
                {
                    type: 'mcq',
                    prompt: 'What is your first action?',
                    options: ['Reject PR with harsh comment', 'Approve with a note to fix later', 'Request changes with explanation', 'Report to manager'],
                    scoreWeights: [
                        { option: 'Reject PR with harsh comment', score: 3, competencies: ['Security Awareness'] },
                        { option: 'Approve with a note to fix later', score: 1, competencies: [] },
                        { option: 'Request changes with explanation', score: 10, competencies: ['Communication', 'Security Awareness', 'Mentorship'] },
                        { option: 'Report to manager', score: 4, competencies: ['Security Awareness'] }
                    ],
                    order: 0
                },
                {
                    type: 'text',
                    prompt: 'Write a brief, constructive comment explaining why hardcoded credentials are dangerous and suggest an alternative.',
                    order: 1
                }
            ]
        },
        {
            title: 'Production Database Outage',
            jobRole: 'Developer',
            difficulty: 'Medium',
            description: 'Your database cluster is down. Users cannot log in. The on-call engineer is unreachable.',
            order: 2,
            rubric: r._id,
            stages: [
                {
                    type: 'ranking',
                    prompt: 'Rank your immediate actions in order of priority:',
                    options: ['Check error logs', 'Notify stakeholders', 'Attempt manual restart', 'Switch to backup DB'],
                    scoreWeights: [
                        { option: 'Check error logs', score: 9, competencies: ['Problem Solving', 'Technical Expertise'] },
                        { option: 'Notify stakeholders', score: 8, competencies: ['Communication', 'Incident Management'] },
                        { option: 'Attempt manual restart', score: 6, competencies: ['Technical Expertise'] },
                        { option: 'Switch to backup DB', score: 10, competencies: ['Disaster Recovery', 'Decision Making'] }
                    ],
                    order: 0
                },
                {
                    type: 'text',
                    prompt: 'The issue was a memory leak in a new query. How do you prevent this from reaching production again?',
                    order: 1
                }
            ]
        },
        {
            title: 'Legacy Refactoring Dilemma',
            jobRole: 'Developer',
            difficulty: 'Hard',
            description: 'You found a critical performance bug in 5-year-old code. Fixing it requires refactoring 3 modules. Release is in 2 days.',
            order: 3,
            rubric: r._id,
            stages: [
                {
                    type: 'mcq',
                    prompt: 'What is your recommended approach?',
                    options: ['Quick patch with TODO comment', 'Full refactor and delay release', 'Feature flag the fix for gradual rollout', 'Ignore until next sprint'],
                    scoreWeights: [
                        { option: 'Quick patch with TODO comment', score: 7, competencies: ['Pragmatism', 'Risk Management'] },
                        { option: 'Full refactor and delay release', score: 5, competencies: ['Code Quality'] },
                        { option: 'Feature flag the fix for gradual rollout', score: 10, competencies: ['Risk Management', 'Technical Expertise', 'Strategic Thinking'] },
                        { option: 'Ignore until next sprint', score: 2, competencies: [] }
                    ],
                    order: 0
                },
                {
                    type: 'ranking',
                    prompt: 'Rank the stakeholders you need to inform:',
                    options: ['Product Manager', 'QA Team', 'DevOps', 'End Users'],
                    scoreWeights: [
                        { option: 'Product Manager', score: 10, competencies: ['Communication', 'Stakeholder Management'] },
                        { option: 'QA Team', score: 9, competencies: ['Collaboration'] },
                        { option: 'DevOps', score: 8, competencies: ['Technical Coordination'] },
                        { option: 'End Users', score: 6, competencies: ['Customer Focus'] }
                    ],
                    order: 1
                },
                {
                    type: 'text',
                    prompt: 'Draft a 2-sentence message to the Product Manager explaining the situation and your recommendation.',
                    order: 2
                }
            ]
        },

        // ========== TEAM LEAD ==========
        {
            title: 'First Day as Team Lead',
            jobRole: 'Team Lead',
            difficulty: 'Easy',
            description: 'You were just promoted to Team Lead. Your former peers are now your reports. One seems resentful.',
            order: 1,
            rubric: r._id,
            stages: [
                {
                    type: 'mcq',
                    prompt: 'How do you address the resentful team member?',
                    options: ['Ignore it and hope it resolves', 'Schedule a private 1:1 immediately', 'Address it in the team meeting', 'Ask your manager to intervene'],
                    scoreWeights: [
                        { option: 'Ignore it and hope it resolves', score: 2, competencies: [] },
                        { option: 'Schedule a private 1:1 immediately', score: 10, competencies: ['Emotional Intelligence', 'Leadership', 'Conflict Resolution'] },
                        { option: 'Address it in the team meeting', score: 4, competencies: ['Transparency'] },
                        { option: 'Ask your manager to intervene', score: 3, competencies: [] }
                    ],
                    order: 0
                },
                {
                    type: 'text',
                    prompt: 'What would you say in the first 30 seconds of that 1:1 to set a collaborative tone?',
                    order: 1
                }
            ]
        },
        {
            title: 'Sprint Velocity Crisis',
            jobRole: 'Team Lead',
            difficulty: 'Medium',
            description: 'Your team has missed sprint commitments 3 times in a row. Morale is low. Management is asking questions.',
            order: 2,
            rubric: r._id,
            stages: [
                {
                    type: 'ranking',
                    prompt: 'Rank the root causes you investigate first:',
                    options: ['Unrealistic story points', 'Too many meetings', 'Technical debt', 'Skill gaps'],
                    scoreWeights: [
                        { option: 'Unrealistic story points', score: 9, competencies: ['Analytical Thinking', 'Process Improvement'] },
                        { option: 'Too many meetings', score: 7, competencies: ['Time Management'] },
                        { option: 'Technical debt', score: 8, competencies: ['Technical Leadership'] },
                        { option: 'Skill gaps', score: 6, competencies: ['Team Development'] }
                    ],
                    order: 0
                },
                {
                    type: 'mcq',
                    prompt: 'How do you present this to management?',
                    options: ['Blame the team for underperformance', 'Request more resources', 'Present data and propose process changes', 'Deflect to external dependencies'],
                    scoreWeights: [
                        { option: 'Blame the team for underperformance', score: 1, competencies: [] },
                        { option: 'Request more resources', score: 5, competencies: ['Advocacy'] },
                        { option: 'Present data and propose process changes', score: 10, competencies: ['Data-Driven Decision Making', 'Leadership', 'Accountability'] },
                        { option: 'Deflect to external dependencies', score: 3, competencies: [] }
                    ],
                    order: 1
                }
            ]
        },
        {
            title: 'Toxic Team Member',
            jobRole: 'Team Lead',
            difficulty: 'Hard',
            description: 'Your most senior engineer is brilliant but dismissive of junior devs. Two juniors have complained privately.',
            order: 3,
            rubric: r._id,
            stages: [
                {
                    type: 'mcq',
                    prompt: 'What is your first step?',
                    options: ['Document the complaints and escalate to HR', 'Have a direct conversation with the senior engineer', 'Reorganize teams to separate them', 'Implement mandatory code review etiquette training'],
                    scoreWeights: [
                        { option: 'Document the complaints and escalate to HR', score: 6, competencies: ['Policy Adherence'] },
                        { option: 'Have a direct conversation with the senior engineer', score: 10, competencies: ['Courage', 'Conflict Resolution', 'Leadership'] },
                        { option: 'Reorganize teams to separate them', score: 4, competencies: ['Avoidance'] },
                        { option: 'Implement mandatory code review etiquette training', score: 7, competencies: ['Process Improvement', 'Team Culture'] }
                    ],
                    order: 0
                },
                {
                    type: 'text',
                    prompt: 'Write the opening statement for your conversation with the senior engineer. Balance directness with respect.',
                    order: 1
                },
                {
                    type: 'ranking',
                    prompt: 'If the behavior continues, rank your escalation steps:',
                    options: ['Formal written warning', 'Involve HR', 'Performance improvement plan', 'Remove from mentorship duties'],
                    scoreWeights: [
                        { option: 'Formal written warning', score: 8, competencies: ['Accountability', 'Documentation'] },
                        { option: 'Involve HR', score: 9, competencies: ['Escalation Management'] },
                        { option: 'Performance improvement plan', score: 10, competencies: ['Performance Management', 'Fairness'] },
                        { option: 'Remove from mentorship duties', score: 7, competencies: ['Team Protection'] }
                    ],
                    order: 2
                }
            ]
        },

        // ========== PROJECT MANAGER ==========
        {
            title: 'Stakeholder Expectation Mismatch',
            jobRole: 'Project Manager',
            difficulty: 'Easy',
            description: 'The client expected a mobile app. Your team quoted for a web app. The contract is ambiguous.',
            order: 1,
            rubric: r._id,
            stages: [
                {
                    type: 'mcq',
                    prompt: 'How do you handle the discovery call?',
                    options: ['Insist the contract says web app', 'Offer to build mobile at extra cost', 'Propose a hybrid PWA solution', 'Apologize and rebuild as mobile'],
                    scoreWeights: [
                        { option: 'Insist the contract says web app', score: 3, competencies: ['Contract Management'] },
                        { option: 'Offer to build mobile at extra cost', score: 7, competencies: ['Negotiation', 'Business Acumen'] },
                        { option: 'Propose a hybrid PWA solution', score: 10, competencies: ['Creative Problem Solving', 'Client Relations', 'Technical Knowledge'] },
                        { option: 'Apologize and rebuild as mobile', score: 4, competencies: ['Customer Service'] }
                    ],
                    order: 0
                },
                {
                    type: 'text',
                    prompt: 'Draft a follow-up email summarizing the agreed path forward and preventing future ambiguity.',
                    order: 1
                }
            ]
        },
        {
            title: 'Resource Allocation Conflict',
            jobRole: 'Project Manager',
            difficulty: 'Medium',
            description: 'Two projects need the same senior developer next week. Both are high priority. You manage both.',
            order: 2,
            rubric: r._id,
            stages: [
                {
                    type: 'ranking',
                    prompt: 'Rank the factors you consider:',
                    options: ['Revenue impact', 'Client relationship', 'Technical complexity', 'Team morale'],
                    scoreWeights: [
                        { option: 'Revenue impact', score: 9, competencies: ['Business Acumen', 'Strategic Thinking'] },
                        { option: 'Client relationship', score: 8, competencies: ['Stakeholder Management'] },
                        { option: 'Technical complexity', score: 7, competencies: ['Risk Assessment'] },
                        { option: 'Team morale', score: 10, competencies: ['People Management', 'Long-term Thinking'] }
                    ],
                    order: 0
                },
                {
                    type: 'mcq',
                    prompt: 'What is your decision?',
                    options: ['Split the developer 50/50', 'Prioritize Project A entirely', 'Hire a contractor for Project B', 'Delay one project by a week'],
                    scoreWeights: [
                        { option: 'Split the developer 50/50', score: 5, competencies: ['Compromise'] },
                        { option: 'Prioritize Project A entirely', score: 7, competencies: ['Decisiveness'] },
                        { option: 'Hire a contractor for Project B', score: 9, competencies: ['Resource Management', 'Creative Solutions'] },
                        { option: 'Delay one project by a week', score: 6, competencies: ['Realistic Planning'] }
                    ],
                    order: 1
                }
            ]
        },
        {
            title: 'Budget Overrun Crisis',
            jobRole: 'Project Manager',
            difficulty: 'Hard',
            description: 'You are 60% through the project and 85% through the budget. Scope is fixed. Client will not pay more.',
            order: 3,
            rubric: r._id,
            stages: [
                {
                    type: 'mcq',
                    prompt: 'What is your immediate action?',
                    options: ['Cut features silently', 'Renegotiate scope with client', 'Absorb the loss and finish', 'Request internal budget increase'],
                    scoreWeights: [
                        { option: 'Cut features silently', score: 2, competencies: [] },
                        { option: 'Renegotiate scope with client', score: 10, competencies: ['Negotiation', 'Transparency', 'Client Management'] },
                        { option: 'Absorb the loss and finish', score: 5, competencies: ['Commitment'] },
                        { option: 'Request internal budget increase', score: 7, competencies: ['Internal Advocacy'] }
                    ],
                    order: 0
                },
                {
                    type: 'ranking',
                    prompt: 'Rank the root causes you analyze:',
                    options: ['Initial estimate was wrong', 'Scope creep occurred', 'Team inefficiency', 'Unforeseen technical challenges'],
                    scoreWeights: [
                        { option: 'Initial estimate was wrong', score: 9, competencies: ['Self-Awareness', 'Process Improvement'] },
                        { option: 'Scope creep occurred', score: 10, competencies: ['Scope Management', 'Analytical Thinking'] },
                        { option: 'Team inefficiency', score: 6, competencies: ['Team Management'] },
                        { option: 'Unforeseen technical challenges', score: 8, competencies: ['Risk Management'] }
                    ],
                    order: 1
                },
                {
                    type: 'text',
                    prompt: 'Write a brief post-mortem summary for your internal team on what went wrong and how to prevent it.',
                    order: 2
                }
            ]
        },

        // ========== HR ==========
        {
            title: 'First Termination',
            jobRole: 'HR',
            difficulty: 'Easy',
            description: 'An employee failed their probation period. You must conduct the termination meeting. They seem unaware.',
            order: 1,
            rubric: r._id,
            stages: [
                {
                    type: 'mcq',
                    prompt: 'How do you open the conversation?',
                    options: ['Get straight to the point', 'Start with positive feedback', 'Ask how they think they are doing', 'Have their manager present'],
                    scoreWeights: [
                        { option: 'Get straight to the point', score: 8, competencies: ['Directness', 'Respect for Time'] },
                        { option: 'Start with positive feedback', score: 4, competencies: ['Empathy'] },
                        { option: 'Ask how they think they are doing', score: 6, competencies: ['Dialogue'] },
                        { option: 'Have their manager present', score: 10, competencies: ['Professionalism', 'Support', 'Documentation'] }
                    ],
                    order: 0
                },
                {
                    type: 'text',
                    prompt: 'Write the first 2 sentences you would say to deliver the news with dignity.',
                    order: 1
                }
            ]
        },
        {
            title: 'Salary Negotiation Standoff',
            jobRole: 'HR',
            difficulty: 'Medium',
            description: 'A top performer is threatening to leave unless they get a 30% raise. Budget allows 10%. Market rate supports 15%.',
            order: 2,
            rubric: r._id,
            stages: [
                {
                    type: 'ranking',
                    prompt: 'Rank your negotiation levers:',
                    options: ['Offer 15% now', 'Propose performance bonus structure', 'Highlight non-monetary benefits', 'Counteroffer with promotion path'],
                    scoreWeights: [
                        { option: 'Offer 15% now', score: 7, competencies: ['Market Awareness', 'Fairness'] },
                        { option: 'Propose performance bonus structure', score: 9, competencies: ['Creative Compensation', 'Retention Strategy'] },
                        { option: 'Highlight non-monetary benefits', score: 6, competencies: ['Total Rewards Knowledge'] },
                        { option: 'Counteroffer with promotion path', score: 10, competencies: ['Career Development', 'Strategic Retention', 'Long-term Thinking'] }
                    ],
                    order: 0
                },
                {
                    type: 'mcq',
                    prompt: 'If they still insist on 30%, what do you do?',
                    options: ['Let them leave', 'Escalate to CFO for exception', 'Match a competing offer if presented', 'Offer equity instead'],
                    scoreWeights: [
                        { option: 'Let them leave', score: 4, competencies: ['Budget Discipline'] },
                        { option: 'Escalate to CFO for exception', score: 7, competencies: ['Advocacy', 'Escalation'] },
                        { option: 'Match a competing offer if presented', score: 8, competencies: ['Competitive Response', 'Retention'] },
                        { option: 'Offer equity instead', score: 9, competencies: ['Creative Solutions', 'Long-term Alignment'] }
                    ],
                    order: 1
                }
            ]
        },
        {
            title: 'Harassment Allegation',
            jobRole: 'HR',
            difficulty: 'Hard',
            description: 'An employee reported that their manager made inappropriate comments. The manager is well-liked and denies it. No witnesses.',
            order: 3,
            rubric: r._id,
            stages: [
                {
                    type: 'mcq',
                    prompt: 'What is your first procedural step?',
                    options: ['Believe the accuser and suspend the manager', 'Interview both parties separately', 'Require written statements from both', 'Hire external investigator'],
                    scoreWeights: [
                        { option: 'Believe the accuser and suspend the manager', score: 5, competencies: ['Victim Support'] },
                        { option: 'Interview both parties separately', score: 9, competencies: ['Impartiality', 'Investigation Skills'] },
                        { option: 'Require written statements from both', score: 8, competencies: ['Documentation', 'Process'] },
                        { option: 'Hire external investigator', score: 10, competencies: ['Objectivity', 'Risk Management', 'Professionalism'] }
                    ],
                    order: 0
                },
                {
                    type: 'ranking',
                    prompt: 'Rank the evidence you seek:',
                    options: ['Email/chat logs', 'Witness interviews', 'Pattern of behavior', 'Accuser credibility check'],
                    scoreWeights: [
                        { option: 'Email/chat logs', score: 10, competencies: ['Evidence-Based Investigation', 'Thoroughness'] },
                        { option: 'Witness interviews', score: 9, competencies: ['Investigation'] },
                        { option: 'Pattern of behavior', score: 8, competencies: ['Contextual Analysis'] },
                        { option: 'Accuser credibility check', score: 4, competencies: [] }
                    ],
                    order: 1
                },
                {
                    type: 'text',
                    prompt: 'The investigation is inconclusive. What actions do you take to protect all parties and the organization?',
                    order: 2
                }
            ]
        }
    ];

    await Scenario.insertMany(scenarios);
    console.log(`✅ Created ${scenarios.length} scenarios with weighted scoring!`);
    mongoose.connection.close();
}

seed().catch(err => {
    console.error('❌ Seed failed:', err);
    process.exit(1);
});
