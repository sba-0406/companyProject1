# Lesson 1: The Raw Node.js Server

Before we drive the sports car (Express.js), we need to learn how the engine works (Node.js `http` module).

## 1. The Big Picture: Client-Server Model
Think of a web server like a **Restaurant**:
*   **The Client (Browser/Postman)** is the **Customer**. They look at the menu and give an order.
*   **The Request** is the **Order**. "I want a burger (GET /burger)".
*   **The Server** is the **Kitchen**. They receive the order, cook the food, and hand it back.
*   **The Response** is the **Food**.

## 2. Key Concepts

### Localhost & Ports
*   **IP Address**: The address of the building (Server). `localhost` (127.0.0.1) is "This Computer".
*   **Port**: The apartment number. Multiple servers can run on one computer if they use different ports (e.g., 3000, 4000, 8080).

### The HTTP Protocol
Every conversation follows strict rules:
1.  **Request**: "GET /home HTTP/1.1"
2.  **Response**: "HTTP/1.1 200 OK" + Headers + Body ("<html>...</html>")

## 3. The `req` and `res` Objects (The "Order" and the "Food")
When a request hits your server, Node.js gives you two objects:

### The Request (`req`)
This contains everything about **what the user wants**.
*   **`req.url`**: The path they asked for (e.g., `/login`, `/users`, `/`).
*   **`req.method`**: The action they want to perform (GET, POST, PUT, DELETE).
*   **`req.headers`**: Metadata like `Content-Type`, `User-Agent`, or `Authorization`.

### The Response (`res`)
This is your toolkit to **send data back**.
*   **`res.writeHead(statusCode, headers)`**: Sends the status and headers at once.
    *   *Example*: `res.writeHead(200, { 'Content-Type': 'application/json' })`
*   **`res.write(chunk)`**: Sends a piece of the body. You can call this multiple times (streaming).
*   **`res.end(data)`**: Signals "I am done". You MUST call this, or the browser will spin forever. You can also pass the final data here.
*   **`res.statusCode`**: A property to set the status code (e.g., `res.statusCode = 404`).
*   **`res.setHeader(name, value)`**: Sets a single header (e.g., `res.setHeader('Content-Type', 'text/html')`).

## 4. The Code: `http` Module
Node.js comes with a built-in module called `http`. We don't need to install anything.

### Code Breakdown
```javascript
const http = require('http'); // Import the built-in module

const server = http.createServer((req, res) => {
  // 1. INSPECT THE REQUEST
  console.log(`Method: ${req.method}, URL: ${req.url}`);

  // 2. ROUTING LOGIC (Business Logic)
  if (req.url === '/' && req.method === 'GET') {
      
      // 3. SEND RESPONSE
      // Set Header: Tell browser we are sending text
      res.setHeader('Content-Type', 'text/plain'); 
      // Set Status: 200 OK
      res.statusCode = 200;
      // Send Body & Close Connection
      res.end('Welcome to the Home Page!'); 
      
  } else if (req.url === '/json') {
      
      // Shortcut: writeHead does status + headers together
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: "Hello JSON!" }));

  } else {
      // Handle 404
      res.writeHead(404);
      res.end('Page Not Found');
  }
});

// 5. START SERVER
server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

## 5. Why is this "hard"?
*   **Manual Routing**: You have to check `req.url` manually for every route (`if/else` hell).
*   **Manual Status/Headers**: You have to remember to set `Content-Type` and status codes yourself.
*   **No Body Parsing**: Notice we didn't handle POST data? In raw Node, accessing the "body" of a request involves listening to data streams (`req.on('data')`), which is complicated. (Express fixes this!)

## Next Step
We will write this code in your `learning` folder and run it to see it in action.
