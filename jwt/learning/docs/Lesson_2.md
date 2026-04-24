# Lesson 2: Enter Express.js

You just saw how painful raw Node.js can be:
1.  Manual `if/else` for every route.
2.  Manual `req.on('data')` just to read a simple JSON body.
3.  Manual headers and status codes.

**Express.js** is a framework that handles this "plumbing" for you.

## 1. The Magic of Express

### Routing
**Raw Node:**
```javascript
if (req.url === '/' && req.method === 'GET') { ... }
```
**Express:**
```javascript
app.get('/', (req, res) => { ... });
```

### Body Parsing
**Raw Node:**
The 10 lines of code you just wrote with `Buffer.concat`.
**Express:**
One line of "Middleware".
```javascript
app.use(express.json()); // I'll explain Middleware in the next lesson!
```
Now `req.body` Just Works™.

## 2. Your Task
We are going to create a new file `learning/express_server.js`.

### Step 1: Install Express
Since we haven't installed it in this folder yet (we did in the root, but let's be sure).
```bash
npm install express
```

### Step 2: Write the Code
Create `learning/express_server.js` with this content:

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// 1. The "Middleware" to parse JSON (The Magic Line)
app.use(express.json());

// 2. Routes
app.get('/', (req, res) => {
    res.send('Welcome to Express!'); // .send() detects content type automatically!
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.post('/echo', (req, res) => {
    console.log("Body:", req.body); // Look! It's already an object!
    res.json(req.body); // .json() sends it back as JSON
});

// 3. Start Server
app.listen(PORT, () => {
    console.log(`Express Server running on port ${PORT}`);
});
```

## 3. Run and Verify
1.  Stop your raw server (Ctrl+C).
2.  Run `node learning/express_server.js`.
3.  Test your GET `/` and POST `/echo` (with JSON) in Postman.

## 4. Reference: Express `req` and `res` Methods

Express enhances the standard Node objects. Here are the most common ones you'll use:

### Request (`req`) - What you GET
*   **`req.body`**: The data sent in a POST/PUT request (requires `express.json()` middleware).
*   **`req.query`**: URL query parameters (e.g., `?name=alice`). Express parses this automatically!
*   **`req.params`**: URL route parameters (e.g., `/users/:id`). Used for dynamic URLs.
*   **`req.headers`**: The headers sent by the client.

### Response (`res`) - What you SEND
*   **`res.send(body)`**: The "Swiss Army Knife". Sends text, HTML, or Buffers. Automatically sets `Content-Type`.
*   **`res.json(object)`**: Forces the response to be JSON. Useful for APIs.
*   **`res.status(code)`**: Sets the HTTP status code (e.g., 404, 201). often chained: `res.status(404).send('Not Found')`.
*   **`res.redirect(path)`**: Redirects the client to a new URL.

