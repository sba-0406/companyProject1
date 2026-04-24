# Lesson 1 Checkpoint: Testing with Postman

You want to check your connections? Great idea! Here is how to verify your `raw_server.js`.

## 1. Run the Server
First, make sure your server is running. In your terminal:
```bash
node learning/raw_server.js
```
You should see: `Server running on port 3000`

## 2. Open Postman

### Test 1: The Home Route
1.  Click **(+) New Request**.
2.  Set Method to **GET**.
3.  Enter URL: `http://localhost:3000/`
4.  Click **Send**.
5.  **Result**: 
    *   Status: `200 OK`
    *   Body: `Welcome home`

### Test 2: The About Route
1.  Click **(+) New Request** (or change the URL).
2.  Set Method to **GET**.
3.  Enter URL: `http://localhost:3000/about`
4.  Click **Send**.
5.  **Result**: 
    *   Status: `200 OK`
    *   Body: `About`

### Test 3: The 404 Route (Random)
1.  Enter URL: `http://localhost:3000/pizza`
2.  Click **Send**.
3.  **Result**: 
    *   Status: `404 Not Found`
    *   Body: `Not Found`

## 3. Check Your Logs
Look at your terminal where the server is running. You should see the logs printing for every request you sent!
```
/
/about
/pizza
```
