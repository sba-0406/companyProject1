# Lesson 2: Code Breakdown

You asked for a line-by-line explanation of `express_server.js`. Here it is!

```javascript
/* 1. IMPORTING EXPRESS */
const express = require('express');
// This imports the 'express' library from your node_modules folder.
// Think of it like opening a toolbox.

/* 2. CREATING THE APP */
const app = express();
// This creates the actual "Application" object.
// 'app' is your main server object. You will attach everything to this.
// It's like "const restaurant = new Restaurant();"

/* 3. SETTING THE PORT */
const PORT = 3000;
// Just a constant so we don't have to type 3000 everywhere.

/* 4. MIDDLEWARE (The Magic Line) */
app.use(express.json());
// "app.use" tells Express to use a plugin (Middleware).
// "express.json()" is a specific plugin that looks at every request.
// IF the request has a JSON body, it parses it and attaches it to "req.body".
// Without this line, "req.body" would be undefined!

/* 5. DEFINING A GET ROUTE */
app.get('/', (req, res) => {
    // "app.get" tells the server: "When someone visits '/' with GET method..."
    // Run this function.
    
    res.send('Welcome to Express! This is much easier.');
    // "res.send" is a smart version of "res.end".
    // It automatically sets "Content-Type" based on what you pass it.
    // Pass a string? -> text/html. Pass an object? -> application/json.
});

/* 6. DEFINING ANOTHER GET ROUTE */
app.get('/about', (req, res) => {
    // A second route. Express handles the "if/else" logic for you.
    res.send('About Us');
});

/* 7. DEFINING A POST ROUTE */
app.post('/echo', (req, res) => {
    // "app.post" listens for POST requests.
    
    console.log("Received Body:", req.body);
    // Because of step #4, req.body is already a nice JavaScript object.
    
    res.json(req.body);
    // "res.json" forces the response to be JSON.
    // It takes the object and converts it to a string for you.
});

/* 8. STARTING THE SERVER */
app.listen(PORT, () => {
    // This actually opens the port and starts listening for traffic.
    console.log(`Express Server running on port ${PORT}`);
});
```

## Express vs Node: The Upgrade

Express adds "Superpowers" to the standard `req` and `res` objects.

### Request (`req`)
| Feature | Raw Node (`http`) | Express (`express`) |
| :--- | :--- | :--- |
| **Path** | `req.url` (e.g., `/user?id=1`) | `req.path` (Just `/user`) |
| **Query Params** | Manual parsing required | `req.query.id` (Automatic!) |
| **Route Params** | Manual Regex parsing | `req.params.id` (Automatic!) |
| **Body** | **Does not exist** (Stream) | `req.body` (Automatic object) |

### Response (`res`)
| Feature | Raw Node (`http`) | Express (`express`) |
| :--- | :--- | :--- |
| **Send Text** | `res.writeHead(200, ...); res.end('Hi')` | `res.send('Hi')` (Sets status & headers for you) |
| **Send JSON** | `res.writeHead(200, ...); res.end(JSON.stringify(obj))` | `res.json(obj)` (Handles everything) |
| **Set Status** | `res.statusCode = 404` | `res.status(404).send(...)` (Chainable!) |
| **Redirect** | `res.writeHead(302, {Location: ...}); res.end()` | `res.redirect('/home')` |

