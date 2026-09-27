# Building Reusable Custom React Hooks

Custom Hooks are JavaScript functions whose names start with `use` and that may call other Hooks. They allow you to extract component logic into reusable functions.

---

## 1. Why Custom Hooks?

Custom hooks let you share stateful logic without duplicating code across components:
- Data fetching & caching
- LocalStorage synchronization
- Window dimensions & media queries
- Debouncing and throttling inputs

---

## 2. Example: `useDebounce`

```jsx
import { useState, useEffect } from "react";

export function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

---

## 3. Example: `useLocalStorage`

```jsx
import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  return [value, setValue];
}
```
