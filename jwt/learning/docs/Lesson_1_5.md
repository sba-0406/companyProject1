# Lesson 1.5: The Hard Way (Body Parsing)

Great attempt! You stumbled upon exactly **WHY** we use Express.

## The Problem
You tried to log `req.body`, `req.params`, and `req.query`, but they printed `undefined`.
**Why?** Because **Node.js doesn't know how to read them**.

By default, Node.js sees a request as a **stream** (like a water hose of data). It doesn't collect the water for you; it just lets it flow. If you want to read the "Body" (the water), you have to catch it in a bucket yourself.

### Typo Alert 🚨
In your code:
```javascript
else if (res.url === '/about') // <--- Typo!
```
You used `res.url` (Response URL) which doesn't exist. You meant `req.url` (Request URL).

### Syntax Alert 🚨
```javascript
res.writeHead(200, 'Content-type', 'text/plain'); // <--- Incorrect syntax
```
It should be:
```javascript
res.writeHead(200, { 'Content-Type': 'text/plain' });
```

## The Challenge

**Your Task:** Implementation a `POST` route to `/echo` that reads the JSON body and sends it back.

### How to read the body (The Hard Way)
You have to listen for "chunks" of data:

```javascript
let body = [];

// 1. Listen for data chunks
req.on('data', (chunk) => {
  body.push(chunk);
});

// 2. Listen for the end of the stream
req.on('end', () => {
  // 3. Assemble the chunks
  const parsedBody = Buffer.concat(body).toString();
  console.log("I got this:", parsedBody);
  
  // Now you can send your response...
  res.end(parsedBody);
});
```

**Try adding this logic to your server!**
1.  Check if `req.method === 'POST'` and `req.url === '/echo'`.
2.  Use the code above to read the body and send it back.
