# Concept: Why `splice` works but `filter` failed

You asked a **Great Question**: *"Why splice works but filter does not work?"*

This touches on the core of JavaScript: **References** and **Immutability**.

## 1. The "Const" Problem
In your code, you imported `posts` like this:
```javascript
const { posts } = require('../models/data');
```
You declared `posts` as a **`const`** (Constant).
*   **`filter`**: Creates a **NEW** array. To use it, you must re-assign the variable:
    ```javascript
    posts = posts.filter(...) // ERROR: Assignment to constant variable.
    ```
    You cannot change what a `const` points to.

*   **`splice`**: Modifies the **EXISTING** array. It does not create a new one. It just goes into the memory and deletes the item.
    ```javascript
    posts.splice(...) // ALLOWED. You aren't changing "posts", you are changing the "contents" of posts.
    ```

## 2. The "Shared Memory" Problem (The Remote Control Analogy)
Even if you used `let posts` instead of `const`, `filter` would still be dangerous in Node.js.

Think of the Array `[]` as a **TV**.
Think of the variable `posts` as the **Remote Control**.

*   **Importing**: When you `require('../models/data')`, Node.js gives you a Remote Control connected to the "Main TV" in memory.
*   **Using `filter`**: You buy a **New TV** (the filtered array) and point your Remote at it.
    *   *Problem*: Everyone else (other files/routes) is still holding Remotes pointing to the **Old TV**. They won't see your changes!
*   **Using `splice`**: You keep the **Same TV** and just smash one of the pixels (remove the item).
    *   *Result*: Everyone looking at that TV sees the pixel is gone.

## Summary
| Method | What it does | Result for Shared Data |
| :--- | :--- | :--- |
| **`filter()`** | Creates a **New Request** | **Fails**: Re-assigns local variable, breaks link to shared data. |
| **`splice()`** | Modifies **In-Place** | **Works**: Updates the shared data directly. |
