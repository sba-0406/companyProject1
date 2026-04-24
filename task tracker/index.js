require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Model = require("./models/Task");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("./models/User");

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const PORT = process.env.PORT || 2000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => console.log("Database connected"))
    .catch(err => console.log(err));

app.use(express.json());
app.use(express.static('public'));

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        // 🕵️‍♂️ Check if token exists and isn't just the string "null"
        if (!token || token === "null") {
            return res.status(401).send("Unauthorized");
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedToken;
        next();
    }
    catch (err) {
        console.log("Auth Error:", err.message);
        res.status(401).send("Invalid Token");
    }
}

// app.use(auth);
// app.get('/', (req, res) => {
//     res.send('Task Tracker Running');
// });

app.post('/tasks', auth, async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.send("Enter proper Details");
    }
    try {
        const task = await Model.create({ title, description, userId: req.user.id });
        res.json(task);
    }
    catch (err) {
        console.log(err);
        res.send("Error creating task");
    }

})

app.get('/tasks', auth, async (req, res) => {
    try {
        const { status } = req.query;
        const filter = { userId: req.user.id };
        if (status) {
            filter.status = status;
        }

        const data = await Model.find(filter);
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.send("Error fetching posts");
    }
})
app.put("/tasks/:id", auth, async (req, res) => {
    try {
        const id = req.params.id;
        const { status } = req.body;
        const task = await Model.findOneAndUpdate({ _id: id, userId: req.user.id }, { status }, { new: true });
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json(task);
    }
    catch (err) {
        console.log(err);
        res.send("Error updating task");
    }
})

app.delete('/tasks/:id', auth, async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Model.findOneAndDelete({ _id: id, userId: req.user.id });
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(task);
    }
    catch (err) {
        console.log(err);
        res.send("Error deleting task");
    }
})

app.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.findOne({ "email": email });
        const hashedPswd = await bcrypt.hash(password, 10);
        if (user) {
            return res.status(400).send("User Already exists");
        }
        const newUser = await User.create({
            username: username,
            email: email,
            password: hashedPswd
        })
        res.status(200).json(newUser);
    }
    catch (err) {
        console.log(err);
        res.send("Error creating user");
    }

})

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ "email": email });
        if (!user) {
            return res.status(400).send("User not found");
        }
        const ValidPswd = await bcrypt.compare(password, user.password);
        if (!ValidPswd) {
            return res.status(400).send("Invalid Password");
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ token: token });
    }
    catch (err) {
        console.log(err);
        res.send("Error logging in");
    }
})

app.post('/ai/breakdown', auth, async (req, res) => {
    try {
        const { title } = req.body;
        if (!title) return res.status(400).send("Task title is required");

        // 🧠 Pro Choice: 'gemini-2.5-flash-lite' gives you 10 RPM (Double the speed!)
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash-lite",
            generationConfig: { responseMimeType: "application/json" }
        });

        const prompt = `Break down the task "${title}" into 3 simple, actionable subtasks. 
        Return ONLY a JSON array of strings. Example: ["Step 1", "Step 2", "Step 3"]`;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        const subtasks = JSON.parse(responseText);

        // 🚀 Auto-create tasks in the database
        const createdTasks = await Promise.all(subtasks.map(step => {
            return Model.create({
                title: step,
                description: `Subtask of: ${title}`,
                userId: req.user.id
            });
        }));

        res.json({ message: "Subtasks created!", count: createdTasks.length });
    } catch (err) {
        console.error("AI Error Status:", err.status);
        console.error("AI Error Message:", err.message);

        const status = err.status || 500;
        res.status(status).json({
            error: "AI failed to create subtasks",
            details: err.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})