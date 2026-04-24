# Concept: `{}` vs No `{}` (Imports and Exports)

You asked: *"When do we use `{}` and when do we not?"*

It depends on how the file **EXPORTED** the code.

## 1. The Bento Box (Named Exports) -> Use `{}`
If a file exports **multiple things** inside an object, you have to "pick" what you want using `{}`. The names **MUST** match.

**File: `math.js`**
```javascript
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

// Exporting a "Box" containing two tools
module.exports = { add, sub }; 
```

**File: `main.js`**
```javascript
// verification: "Open the box and give me 'add' and 'sub'"
const { add, sub } = require('./math'); 

console.log(add(1, 2));
```

## 2. The Sandbox (Default Export) -> No `{}`
If a file exports **ONLY ONE** main thing, you just grab it. You can name it whatever you want.

**File: `logger.js`**
```javascript
const log = (msg) => console.log(msg);

// Exporting JUST the function. No box.
module.exports = log; 
```

**File: `main.js`**
```javascript
// verification: "Give me the thing. I'll call it 'myLogger'"
const myLogger = require('./logger'); 

myLogger("Hello");
```

## Summary Table
| Export Code | Import Code | Analogy |
| :--- | :--- | :--- |
| `module.exports = { a, b }` | `const { a, b } = require('./x')` | **Bento Box**: You pick specific items. |
| `module.exports = a` | `const a = require('./x')` | **Sandwich**: You just take the whole thing. |

### In Your Project
*   **`const { posts } = require('./data')`**: `data.js` exports `{ posts }` (an object containing posts).
*   **`const express = require('express')`**: The `express` library exports one big function.
