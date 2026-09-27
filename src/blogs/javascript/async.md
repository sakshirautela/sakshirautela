# Asynchronous JavaScript: Promises, Async/Await & The Event Loop

Asynchronous programming is at the core of JavaScript's non-blocking, single-threaded execution model. In this article, we dive deep into how JavaScript handles async operations under the hood.

---

## 1. The JavaScript Runtime & Event Loop

JavaScript is single-threaded, meaning it has one call stack and executes one piece of code at a time. The browser runtime provides Web APIs (like `setTimeout`, DOM events, and `fetch`) that execute asynchronously.

```javascript
console.log("1. Start");

setTimeout(() => {
  console.log("2. Timeout Callback (Macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Promise Microtask");
});

console.log("4. End");
```

### Output:
```
1. Start
4. End
3. Promise Microtask
2. Timeout Callback (Macrotask)
```

> **Key Takeaway:** Microtasks (Promise callbacks, `queueMicrotask`, `MutationObserver`) always run before Macrotasks (e.g. `setTimeout`, `setInterval`).

---

## 2. Promises in Modern JavaScript

A `Promise` is an object representing the eventual completion or failure of an asynchronous operation.

```javascript
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    if (!userId) {
      return reject(new Error("Invalid User ID"));
    }
    
    setTimeout(() => {
      resolve({ id: userId, name: "Sakshi", role: "Software Engineer" });
    }, 500);
  });
}

fetchUserData(101)
  .then(user => console.log("User:", user))
  .catch(err => console.error("Error:", err.message));
```

---

## 3. Async / Await Syntactic Sugar

`async/await` provides a clean, synchronous-looking syntax for writing asynchronous code while maintaining non-blocking performance.

```javascript
async function getProfile() {
  try {
    const user = await fetchUserData(101);
    console.log(`Hello, ${user.name}!`);
    return user;
  } catch (error) {
    console.error("Failed to load profile:", error);
  }
}
```

---

## 4. Best Practices for Production
- Always wrap `await` calls in `try...catch` or handle rejection gracefully.
- Use `Promise.allSettled()` when you need all requests to finish regardless of individual failures.
- Avoid sequential awaits when requests can run in parallel:

```javascript
// ❌ Slower: Sequential
const user = await fetchUser();
const posts = await fetchPosts();

// ✅ Faster: Parallel
const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
```
