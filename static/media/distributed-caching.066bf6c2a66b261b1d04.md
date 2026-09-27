# Designing Resilient Distributed Caching Systems

Caching is one of the most effective strategies for scaling web architectures to millions of concurrent users.

---

## 1. Cache Invalidation Strategies

> *"There are only two hard things in Computer Science: cache invalidation and naming things."* — Phil Karlton

### 1. Cache-Aside (Lazy Loading)
The application first queries the cache. If cache miss, it reads from the DB, stores the result in cache, and returns.

```
App -> Cache (Miss) -> DB (Read) -> Cache (Store) -> App
```

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
- **FIFO (First In First Out)**: Simple queue eviction.
