/**
 * Dynamic Blog Manager for Sakshi Rautela's Portfolio
 * Automatically discovers all folders and .md files under src/blogs/
 * Supports dynamic topic creation, article listing, and markdown parsing.
 */

// Helper to format topic folder name into human-readable title
export function formatTopicName(folderName) {
  if (!folderName) return "";
  
  const customNames = {
    javascript: "JavaScript",
    reactjs: "React.js",
    reactJs: "React.js",
    machinelearning: "Machine Learning",
    MachineLearning: "Machine Learning",
    deeplearning: "Deep Learning",
    DeepLearning: "Deep Learning",
    systemdesign: "System Design",
    datastructure: "Data Structures",
    algorithms: "Algorithms",
    java: "Java",
    python: "Python",
    ai: "Artificial Intelligence",
    webdev: "Web Development",
    cloud: "Cloud & DevOps",
  };

  if (customNames[folderName]) {
    return customNames[folderName];
  }

  // Generic conversion from camelCase, snake_case, kebab-case to Title Case
  return folderName
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

// Helper to extract clean human-readable title and excerpt from content or filename
export function extractArticleMetadata(fileName, content = "") {
  let title = "";
  let excerpt = "";

  if (content) {
    const lines = content.split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (!title && trimmed.startsWith("# ")) {
        title = trimmed.replace(/^#\s+/, "").trim();
      } else if (!excerpt && trimmed && !trimmed.startsWith("#") && !trimmed.startsWith("```") && !trimmed.startsWith("---") && !trimmed.startsWith(">")) {
        excerpt = trimmed;
      }
      if (title && excerpt) break;
    }
  }

  if (!title) {
    const nameWithoutExt = fileName.replace(/\.md$/i, "");
    title = nameWithoutExt
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  if (!excerpt) {
    excerpt = `In-depth exploration and engineering notes on ${title}.`;
  }

  return { title, excerpt };
}

// Helper to format filename to readable title
export function formatArticleTitle(fileName) {
  const nameWithoutExt = fileName.replace(/\.md$/i, "");
  return nameWithoutExt
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

// Helper to get topic styling & metadata
export function getTopicMeta(topicSlug) {
  const slugLower = topicSlug.toLowerCase();
  
  const metaMap = {
    javascript: {
      color: "#f7df1e",
      badgeBg: "rgba(247, 223, 30, 0.12)",
      icon: "⚡",
      desc: "Core JS concepts, ESNext, Event Loop, Async patterns & performance.",
    },
    reactjs: {
      color: "#38bdf8",
      badgeBg: "rgba(56, 189, 248, 0.12)",
      icon: "⚛️",
      desc: "Hooks, architecture patterns, performance tuning & component design.",
    },
    machinelearning: {
      color: "#a855f7",
      badgeBg: "rgba(168, 85, 247, 0.12)",
      icon: "🧠",
      desc: "Neural networks, transformers, loss functions & computer vision.",
    },
    deeplearning: {
      color: "#ec4899",
      badgeBg: "rgba(236, 72, 153, 0.12)",
      icon: "🔬",
      desc: "Deep learning models, CNNs, RNNs, PyTorch & LLM fine-tuning.",
    },
    systemdesign: {
      color: "#10b981",
      badgeBg: "rgba(16, 185, 129, 0.12)",
      icon: "🏛️",
      desc: "Scalable architecture, caching, microservices & distributed systems.",
    },
    datastructure: {
      color: "#fb923c",
      badgeBg: "rgba(251, 146, 60, 0.12)",
      icon: "📊",
      desc: "Trees, graphs, dynamic programming, sorting & algorithmic challenges.",
    },
    java: {
      color: "#ef4444",
      badgeBg: "rgba(239, 68, 68, 0.12)",
      icon: "☕",
      desc: "JVM internals, multithreading, Spring Boot & design patterns.",
    },
    python: {
      color: "#3b82f6",
      badgeBg: "rgba(59, 130, 246, 0.12)",
      icon: "🐍",
      desc: "Data science, automation, backend APIs & Pythonic idioms.",
    },
  };

  return metaMap[slugLower] || {
    color: "#38bdf8",
    badgeBg: "rgba(56, 189, 248, 0.12)",
    icon: "📁",
    desc: `Articles, notes and insights on ${formatTopicName(topicSlug)}.`,
  };
}

// Fallback content in case fetch is blocked or offline
const embeddedArticles = {
  "javascript/async.md": `# Asynchronous JavaScript: Promises, Async/Await & The Event Loop

Asynchronous programming is at the core of JavaScript's non-blocking, single-threaded execution model. In this article, we dive deep into how JavaScript handles async operations under the hood.

---

## 1. The JavaScript Runtime & Event Loop

JavaScript is single-threaded, meaning it has one call stack and executes one piece of code at a time. The browser runtime provides Web APIs (like \`setTimeout\`, DOM events, and \`fetch\`) that execute asynchronously.

\`\`\`javascript
console.log("1. Start");

setTimeout(() => {
  console.log("2. Timeout Callback (Macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Promise Microtask");
});

console.log("4. End");
\`\`\`

### Output:
\`\`\`
1. Start
4. End
3. Promise Microtask
2. Timeout Callback (Macrotask)
\`\`\`

> **Key Takeaway:** Microtasks (Promise callbacks, \`queueMicrotask\`, \`MutationObserver\`) always run before Macrotasks (e.g. \`setTimeout\`, \`setInterval\`).

---

## 2. Promises in Modern JavaScript

A \`Promise\` is an object representing the eventual completion or failure of an asynchronous operation.

\`\`\`javascript
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
\`\`\`

---

## 3. Async / Await Syntactic Sugar

\`async/await\` provides a clean, synchronous-looking syntax for writing asynchronous code while maintaining non-blocking performance.

\`\`\`javascript
async function getProfile() {
  try {
    const user = await fetchUserData(101);
    console.log(\`Hello, \${user.name}!\`);
    return user;
  } catch (error) {
    console.error("Failed to load profile:", error);
  }
}
\`\`\`

---

## 4. Best Practices for Production
- Always wrap \`await\` calls in \`try...catch\` or handle rejection gracefully.
- Use \`Promise.allSettled()\` when you need all requests to finish regardless of individual failures.
- Avoid sequential awaits when requests can run in parallel:

\`\`\`javascript
// ❌ Slower: Sequential
const user = await fetchUser();
const posts = await fetchPosts();

// ✅ Faster: Parallel
const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
\`\`\``,

  "javascript/closures.md": `# Understanding JavaScript Closures & Lexical Scope

A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

---

## 1. What is a Closure?

In JavaScript, closures give inner functions access to an outer function's scope even after the outer function has returned.

\`\`\`javascript
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
\`\`\`

---

## 2. Practical Real-World Use Cases

### 1. Data Encapsulation & Private Variables
Closures allow us to hide variables from the global scope, avoiding pollution and accidental mutations.

### 2. Function Currying & Partial Application
\`\`\`javascript
const multiply = (a) => (b) => a * b;
const double = multiply(2);
const triple = multiply(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
\`\`\`

### 3. Memoization
\`\`\`javascript
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
\`\`\`

---

## Summary
Closures are fundamental in JavaScript for state management, functional programming patterns, and building robust modular libraries.`,

  "reactJs/custom-hooks.md": `# Building Reusable Custom React Hooks

Custom Hooks are JavaScript functions whose names start with \`use\` and that may call other Hooks. They allow you to extract component logic into reusable functions.

---

## 1. Why Custom Hooks?

Custom hooks let you share stateful logic without duplicating code across components:
- Data fetching & caching
- LocalStorage synchronization
- Window dimensions & media queries
- Debouncing and throttling inputs

---

## 2. Example: \`useDebounce\`

\`\`\`jsx
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
\`\`\`

---

## 3. Example: \`useLocalStorage\`

\`\`\`jsx
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
\`\`\``,

  "MachineLearning/transformer-architectures.md": `# Deep Dive into Transformer Architectures & Self-Attention

Transformers have revolutionized Natural Language Processing and Computer Vision. Introduced in the landmark paper *"Attention Is All You Need"* (Vaswani et al., 2017), the architecture relies entirely on self-attention mechanisms.

---

## 1. Scaled Dot-Product Attention

The core formula of attention is defined as:

$$\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$$

Where:
- **Q (Query)**: Represents what we are looking for.
- **K (Key)**: Represents what information is available.
- **V (Value)**: The actual content extracted based on the attention weight.

---

## 2. Multi-Head Attention

Multi-head attention allows the model to jointly attend to information from different representation subspaces at different positions:

\`\`\`python
import torch
import torch.nn as nn

class MultiHeadAttention(nn.Module):
    def __init__(self, d_model=512, num_heads=8):
        super().__init__()
        self.num_heads = num_heads
        self.d_k = d_model // num_heads
        
        self.q_linear = nn.Linear(d_model, d_model)
        self.k_linear = nn.Linear(d_model, d_model)
        self.v_linear = nn.Linear(d_model, d_model)
        self.out = nn.Linear(d_model, d_model)
        
    def forward(self, q, k, v, mask=None):
        bs = q.size(0)
        # perform linear operation and split into num_heads
        k = self.k_linear(k).view(bs, -1, self.num_heads, self.d_k).transpose(1,2)
        q = self.q_linear(q).view(bs, -1, self.num_heads, self.d_k).transpose(1,2)
        v = self.v_linear(v).view(bs, -1, self.num_heads, self.d_k).transpose(1,2)
        
        # calculate attention
        scores = torch.matmul(q, k.transpose(-2, -1)) / (self.d_k ** 0.5)
        if mask is not None:
            scores = scores.masked_fill(mask == 0, -1e9)
        weights = torch.softmax(scores, dim=-1)
        output = torch.matmul(weights, v)
        
        # concatenate heads and pass through final linear layer
        concat = output.transpose(1,2).contiguous().view(bs, -1, self.num_heads * self.d_k)
        return self.out(concat)
\`\`\`

---

## 3. Why Transformers Outperform RNNs & LSTMs
1. **Parallelization**: Sequential computation in RNNs prevents GPU parallelization during training.
2. **Long-range Dependencies**: Attention has constant $O(1)$ path length between any two tokens, eliminating the vanishing gradient problem over long sequences.`,

  "systemdesign/distributed-caching.md": `# Designing Resilient Distributed Caching Systems

Caching is one of the most effective strategies for scaling web architectures to millions of concurrent users.

---

## 1. Cache Invalidation Strategies

> *"There are only two hard things in Computer Science: cache invalidation and naming things."* — Phil Karlton

### 1. Cache-Aside (Lazy Loading)
The application first queries the cache. If cache miss, it reads from the DB, stores the result in cache, and returns.

\`\`\`
App -> Cache (Miss) -> DB (Read) -> Cache (Store) -> App
\`\`\`

### 2. Write-Through
The application writes to the cache and the cache immediately writes synchronously to the DB.

### 3. Write-Back (Write-Behind)
The application writes to the cache, and the cache asynchronously writes to the database in batches.

---

## 2. Preventing Cache Stampede / Thundering Herd

When a hot key expires, thousands of concurrent requests might hit the primary database simultaneously.

### Solutions:
1. **Mutex / Distributed Lock**: Only the first worker gets the lock to recompute the cache value; others wait or receive stale data.
2. **Probabilistic Early Expiration (XFetch algorithm)**: Recomputes the cache value before it actually expires based on request probability.
3. **Soft TTL with Background Refresh**: Return the cached data even if soft-expired, while triggering a background task to refresh the cache.

---

## 3. Eviction Policies
- **LRU (Least Recently Used)**: Evicts keys that haven't been requested the longest.
- **LFU (Least Frequently Used)**: Evicts keys with the lowest hit counter.
- **FIFO (First In First Out)**: Simple queue eviction.`
};

/**
 * Discovers all blog articles dynamically from Webpack context
 */
export function getAllBlogArticles() {
  const articles = [];
  const foundKeys = new Set();

  try {
    // Dynamic webpack context discovering any folder and .md files in src/blogs/
    const blogContext = require.context("../blogs", true, /\.md$/);
    blogContext.keys().forEach((key) => {
      // key looks like: "./javascript/async.md" or "./reactJs/custom-hooks.md"
      const normalizedKey = key.replace(/^\.\//, "");
      foundKeys.add(normalizedKey);
      
      const parts = normalizedKey.split("/");
      if (parts.length >= 2) {
        const topicSlug = parts[0];
        const fileName = parts.slice(1).join("/");
        const fileSlug = fileName.replace(/\.md$/i, "");
        const assetUrl = blogContext(key);

        const fallback = embeddedArticles[normalizedKey] || "";
        const meta = extractArticleMetadata(fileName, fallback);

        articles.push({
          id: `${topicSlug}/${fileSlug}`,
          topicSlug,
          topicName: formatTopicName(topicSlug),
          fileName,
          fileSlug,
          title: meta.title,
          excerpt: meta.excerpt,
          assetUrl: typeof assetUrl === "string" ? assetUrl : assetUrl?.default || "",
          fallbackContent: fallback,
        });
      }
    });
  } catch (err) {
    console.warn("Dynamic context loading src/blogs failed, using fallback repository:", err);
  }

  // Also include any embedded articles not found yet
  Object.keys(embeddedArticles).forEach((key) => {
    if (!foundKeys.has(key)) {
      const parts = key.split("/");
      const topicSlug = parts[0];
      const fileName = parts.slice(1).join("/");
      const fileSlug = fileName.replace(/\.md$/i, "");
      const fallback = embeddedArticles[key];
      const meta = extractArticleMetadata(fileName, fallback);

      articles.push({
        id: `${topicSlug}/${fileSlug}`,
        topicSlug,
        topicName: formatTopicName(topicSlug),
        fileName,
        fileSlug,
        title: meta.title,
        excerpt: meta.excerpt,
        assetUrl: "",
        fallbackContent: fallback,
      });
    }
  });

  return articles;
}

/**
 * Groups all articles by Topic Folder
 */
export function getBlogTopics() {
  const articles = getAllBlogArticles();
  const topicsMap = {};

  articles.forEach((article) => {
    const { topicSlug, topicName } = article;
    if (!topicsMap[topicSlug]) {
      const meta = getTopicMeta(topicSlug);
      topicsMap[topicSlug] = {
        slug: topicSlug,
        title: topicName,
        meta,
        articles: [],
      };
    }
    topicsMap[topicSlug].articles.push(article);
  });

  return Object.values(topicsMap);
}

/**
 * Fetches the markdown raw text for a specific article
 */
export async function loadArticleContent(article) {
  if (!article) return "";

  // 1. If assetUrl exists, try fetching it from webpack asset server
  if (article.assetUrl) {
    try {
      const response = await fetch(article.assetUrl);
      if (response.ok) {
        const text = await response.text();
        if (text && text.trim().length > 0 && !text.includes("<!DOCTYPE html>")) {
          return text;
        }
      }
    } catch (e) {
      console.warn("Failed fetching from assetUrl, falling back to embedded content:", e);
    }
  }

  // 2. Return fallback embedded content if available
  if (article.fallbackContent) {
    return article.fallbackContent;
  }

  const lookupKey = `${article.topicSlug}/${article.fileName}`;
  if (embeddedArticles[lookupKey]) {
    return embeddedArticles[lookupKey];
  }

  return `# ${article.title}\n\nContent for **${article.fileName}** in topic **${article.topicName}** will appear here. Add your markdown content in \`src/blogs/${article.topicSlug}/${article.fileName}\`.`;
}
