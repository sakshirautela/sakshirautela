# Understanding JavaScript Closures & Lexical Scope

A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

---

## 1. What is a Closure?

In JavaScript, closures give inner functions access to an outer function's scope even after the outer function has returned.

```javascript
function createCounter(initialValue = 0) {
  let count = initialValue;

  return {
    increment() {
      count += 1;
      return count;
    },
    decrement() {
      count -= 1;
      return count;
    },
    getValue() {
      return count;
    }
  };
}

const counter = createCounter(10);
console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.decrement()); // 11
```

---

## 2. Practical Real-World Use Cases

### 1. Data Encapsulation & Private Variables
Closures allow us to hide variables from the global scope, avoiding pollution and accidental mutations.

### 2. Function Currying & Partial Application
```javascript
const multiply = (a) => (b) => a * b;
const double = multiply(2);
const triple = multiply(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

### 3. Memoization
```javascript
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}
```

---

## Summary
Closures are fundamental in JavaScript for state management, functional programming patterns, and building robust modular libraries.
