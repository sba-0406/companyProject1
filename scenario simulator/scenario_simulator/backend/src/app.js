const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

// Load env vars from root directory
dotenv.config({ path: path.join(__dirname, '../../.env') });

// Connect to database
const connectDB = require('./config/db');
connectDB();

console.log('[SYSTEM INIT] Environment Variables Checked:');
console.log(` - GROQ_API_KEY: ${process.env.GROQ_API_KEY ? 'DETECTED' : 'MISSING'}`);
console.log(` - GEMINI_API_KEY: ${process.env.GEMINI_API_KEY ? 'DETECTED' : 'MISSING'}`);
console.log(` - PORT: ${process.env.PORT || 4000}`);

// Register Models
require('./models/User');
require('./models/Rubric');
require('./models/Scenario');
require('./models/SimulationResponse');
require('./models/ChatSession');

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Cookie parser
app.use(cookieParser());

// Enable CORS
app.use(cors());

// Set static folder for public assets
app.use(express.static(path.join(__dirname, '../../frontend/public')));

// Set View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../../frontend/views'));

// Route files
const authRoutes = require('./routes/authRoutes');
const scenarioRoutes = require('./routes/scenarioRoutes');
const simulationRoutes = require('./routes/simulationRoutes');
const reportRoutes = require('./routes/reportRoutes');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const aiGenerationRoutes = require('./routes/aiGenerationRoutes');
const chatRoutes = require('./routes/chatRoutes');
const dojoRoutes = require('./routes/dojoRoutes');

// Mount routers
app.use('/api/auth', authRoutes);
app.use('/api/scenarios', scenarioRoutes);
app.use('/api/simulation', simulationRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/users', userRoutes);
app.use('/api/ai', aiGenerationRoutes);
app.use('/api/chat', chatRoutes);
app.use('/dojo', dojoRoutes);

// View Routes (Simple rendering for now)
app.get('/', (req, res) => res.render('login')); // Default to login
app.get('/dashboard', (req, res) => res.render('dashboard'));
app.get('/scenario/:id', (req, res) => res.render('scenario', { scenarioId: req.params.id }));
app.get('/report', (req, res) => res.render('report'));
app.get('/admin', (req, res) => res.render('admin'));
app.get('/chat/:id', (req, res) => res.render('chat', { sessionId: req.params.id }));

module.exports = app;
