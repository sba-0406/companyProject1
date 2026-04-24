// const express = require('express');
// const app = express();
// const PORT = 3000;

// // 1. Middleware: This one line replaces all that "Buffer.concat" logic!
// app.use(express.json());

// // 2. Routing: No more "if (req.url === ...)"
// app.get('/', (req, res) => {
//     // .send() automatically sets Content-Type to text/html or text/plain
//     res.send('Welcome to Express! This is much easier.');
// });

// app.get('/about', (req, res) => {
//     res.send('About Us');
// });

// // 3. Body Parsing: req.body is just THERE. Magic.
// app.post('/echo', (req, res) => {
//     console.log("Received Body:", req.body);
//     res.json(req.body); // .json() automatically sets Content-Type to application/json
// });

// // 4. Start Server
// app.listen(PORT, () => {
//     console.log(`Express Server running on port ${PORT}`);
// });


const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to Express! This is much easier.")
});

app.get('/about', (req, res) => {
    res.send("About Us")
});

app.post('/echo', (req, res) => {
    console.log("Received Body:", req.body)
    res.json(req.body)
});

app.listen(port, () => {
    console.log(`Express Server running on port ${port}`);
});

