### 1. UI/UX
UI is the look, UX is the feel. For Example: On mobile, we prioritize simplicity and big touch areas. On web, we can show more content since screen space is larger.

### 2. Basic Design Elements
Color, typography, spacing, icons, and grid.

### 3. Grid System
Column-row layout system. Example: Bootstrap’s 12-column grid.

### 4. Compatibility Across Devices
Use responsive design, media queries, and test on different screen sizes. Frameworks like Bootstrap help.

### 5. Asynchronous Task
Tasks that run without blocking main thread, e.g., using `fetch()` in JS.

### 6. Reduce API Loading Time
Use `Promise.all()` to make multiple API calls in parallel.
```js
Promise.all([fetch(url1), fetch(url2)])
  .then(([res1, res2]) => { /* handle response */ })
```

### 7. Frontend Security
Watch for XSS, avoid unsafe `innerHTML`, always validate input.

### 8. Code Formatting
Keeps code clean and consistent. Tools: Prettier, ESLint.