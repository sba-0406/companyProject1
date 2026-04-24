# Lesson 1: The Raw Node.js Server

## 1. What is a Web Server?
At its core, a web server is a program that listens for **Requests** and sends back **Responses**.
-   **Request**: "Hey, give me the home page" or "Here is my login data".
-   **Response**: "Here is the HTML file" or "Login successful".

## 2. The `http` Module
Node.js has a built-in module called `http` that allows us to create specific network driven applications. We don't need any external tools (like Express) to build a server; we can do it with just Node!

### Key Concepts
1.  **Port**: A communication endpoint. Think of it like a "channel" on a TV. Web traffic usually uses port `80` (HTTP) or `443` (HTTPS). For development, we often use `3000`, `4000`, or `8080`.
2.  **Callback Function**: A function that runs *every time* a request hits our server.

## 3. The Code Structure
Here is the skeleton of a raw Node.js server:

```javascript
const http = require('http'); // Import the module

const server = http.createServer((req, res) => {
    // 1. req (Request): Info about what the user wants uses headers, url, method.
    // 2. res (Response): Tools to send data back to the user.

    console.log('Use Request received!');
    
    // Send a response
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from raw Node.js!');
});

// Start listening
server.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

## 4. Why learn this?
Frameworks like **Express.js** hide all this complexity. They wrap this exact code in nicer functions.
-   In raw Node, you have to manually check `req.url` and `req.method` (e.g., `if (url === '/login' && method === 'POST')`).
-   In Express, you just do `app.post('/login', ...)`.

Understanding the raw version makes you a better engineer because you know what's happening *under the hood*.

## 5. Your Challenge
1.  Create a file named `raw_server.js` in the `learning` folder.
2.  Implement a server that handles two routes:
    -   `/`: Responds with "Welcome Home".
    -   `/about`: Responds with "About Us".
    -   Any other URL: Responds with "404 Not Found".

Ready to write some code?
