import React, { useState, useEffect, useMemo } from "react";
import {
  Folder,
  FileText,
  Search,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Clock,
  Sparkles,
  ChevronRight,
  Home,
  Tag
} from "lucide-react";
import {
  getBlogTopics,
  getAllBlogArticles,
  loadArticleContent,
  formatTopicName,
  formatArticleTitle
} from "../utils/blogManager";
import MarkdownRenderer from "./Blog/MarkdownRenderer";
import "../styles/BlogSection.css";

export default function BlogSection() {
  const [topics, setTopics] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Navigation states parsed from window.location.hash
  // e.g. #blog, #blog/javascript, #blog/javascript/async
  const [activeTopicSlug, setActiveTopicSlug] = useState(null);
  const [activeArticleSlug, setActiveArticleSlug] = useState(null);
  const [currentArticleContent, setCurrentArticleContent] = useState("");
  const [isLoadingArticle, setIsLoadingArticle] = useState(false);

  // Load all dynamically discovered topics and articles on mount
  useEffect(() => {
    const discoveredTopics = getBlogTopics();
    const discoveredArticles = getAllBlogArticles();
    setTopics(discoveredTopics);
    setAllArticles(discoveredArticles);
  }, []);

  // Parse URL hash on change or load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash.startsWith("#blog")) {
        return;
      }

      // Format: #blog or #blog/javascript or #blog/javascript/async
      const parts = hash.replace(/^#blog\/?/, "").split("/").filter(Boolean);

      if (parts.length === 0) {
        // Root #blog view
        setActiveTopicSlug(null);
        setActiveArticleSlug(null);
        setCurrentArticleContent("");
      } else if (parts.length === 1) {
        // Topic articles list: #blog/:topic
        setActiveTopicSlug(parts[0]);
        setActiveArticleSlug(null);
        setCurrentArticleContent("");
      } else if (parts.length >= 2) {
        // Specific article view: #blog/:topic/:file
        const topic = parts[0];
        const file = parts.slice(1).join("/");
        setActiveTopicSlug(topic);
        setActiveArticleSlug(file);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // When activeArticleSlug changes, load its markdown content
  useEffect(() => {
    if (activeTopicSlug && activeArticleSlug) {
      const targetArticle = allArticles.find(
        (a) =>
          a.topicSlug.toLowerCase() === activeTopicSlug.toLowerCase() &&
          (a.fileSlug.toLowerCase() === activeArticleSlug.toLowerCase() ||
           a.fileName.toLowerCase() === activeArticleSlug.toLowerCase())
      );

      if (targetArticle) {
        setIsLoadingArticle(true);
        loadArticleContent(targetArticle)
          .then((content) => {
            setCurrentArticleContent(content);
          })
          .finally(() => {
            setIsLoadingArticle(false);
          });
      }
    }
  }, [activeTopicSlug, activeArticleSlug, allArticles]);

  // Navigate helper to update window hash
  const navigateTo = (path) => {
    window.location.hash = path;
    const blogEl = document.getElementById("blog");
    if (blogEl) {
      blogEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Find active topic object
  const currentTopic = useMemo(() => {
    if (!activeTopicSlug) return null;
    return (
      topics.find(
        (t) => t.slug.toLowerCase() === activeTopicSlug.toLowerCase()
      ) || {
        slug: activeTopicSlug,
        title: formatTopicName(activeTopicSlug),
        meta: { icon: "📁", desc: `Notes and articles in ${activeTopicSlug}` },
        articles: allArticles.filter(
          (a) => a.topicSlug.toLowerCase() === activeTopicSlug.toLowerCase()
        ),
      }
    );
  }, [activeTopicSlug, topics, allArticles]);

  // Find active article object
  const currentArticle = useMemo(() => {
    if (!activeTopicSlug || !activeArticleSlug) return null;
    return allArticles.find(
      (a) =>
        a.topicSlug.toLowerCase() === activeTopicSlug.toLowerCase() &&
        (a.fileSlug.toLowerCase() === activeArticleSlug.toLowerCase() ||
         a.fileName.toLowerCase() === activeArticleSlug.toLowerCase())
    );
  }, [activeTopicSlug, activeArticleSlug, allArticles]);

  // Filtered topics for the main blog grid
  const filteredTopics = useMemo(() => {
    if (!searchQuery.trim()) return topics;
    const query = searchQuery.toLowerCase();
    return topics.filter(
      (topic) =>
        topic.title.toLowerCase().includes(query) ||
        topic.slug.toLowerCase().includes(query) ||
        topic.articles.some(
          (a) =>
            a.title.toLowerCase().includes(query) ||
            a.fileName.toLowerCase().includes(query)
        )
    );
  }, [topics, searchQuery]);

  // Filtered articles inside the active topic view
  const filteredTopicArticles = useMemo(() => {
    if (!currentTopic) return [];
    const list = currentTopic.articles || [];
    if (!searchQuery.trim()) return list;
    const query = searchQuery.toLowerCase();
    return list.filter(
      (a) =>
        a.title.toLowerCase().includes(query) ||
        a.fileName.toLowerCase().includes(query)
    );
  }, [currentTopic, searchQuery]);

  // Estimate read time based on word count
  const readTimeEstimate = useMemo(() => {
    if (!currentArticleContent) return "3 min read";
    const words = currentArticleContent.trim().split(/\s+/).length;
    const mins = Math.max(1, Math.ceil(words / 180));
    return `${mins} min read`;
  }, [currentArticleContent]);

  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        {/* =========================================================
            BREADCRUMBS NAVIGATION BAR
            ========================================================= */}
        <nav className="blog-breadcrumbs" aria-label="Blog navigation">
          <button
            type="button"
            className="breadcrumb-btn"
            onClick={() => navigateTo("#hero")}
            title="Go to Home"
          >
            <Home size={14} />
            <span>Home</span>
          </button>
          <span className="breadcrumb-separator">/</span>

          <button
            type="button"
            className={`breadcrumb-btn ${!activeTopicSlug ? "breadcrumb-current" : ""}`}
            onClick={() => navigateTo("#blog")}
          >
            <BookOpen size={14} />
            <span>Blog</span>
          </button>

          {activeTopicSlug && (
            <>
              <span className="breadcrumb-separator">/</span>
              <button
                type="button"
                className={`breadcrumb-btn ${!activeArticleSlug ? "breadcrumb-current" : ""}`}
                onClick={() => navigateTo(`#blog/${activeTopicSlug}`)}
              >
                <Folder size={14} />
                <span>{currentTopic?.title || formatTopicName(activeTopicSlug)}</span>
              </button>
            </>
          )}

          {activeArticleSlug && (
            <>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">
                <FileText size={14} />
                <span>{currentArticle?.title || formatArticleTitle(activeArticleSlug)}</span>
              </span>
            </>
          )}
        </nav>

        {/* =========================================================
            VIEW 1: TOPICS GRID (#blog)
            ========================================================= */}
        {!activeTopicSlug && (
          <>
            <div className="blog-header">
              <div className="blog-badge-row">
                <span className="blog-badge">
                  <Sparkles size={12} />
                  <span>Engineering Notes & Articles</span>
                </span>
                <span className="blog-count-pill">
                  {topics.length} Topics • {allArticles.length} Articles
                </span>
              </div>
              <h2 className="blog-title">Technical Knowledge Base</h2>
              <p className="blog-subtitle">
                Explore deep dives, architecture patterns, and engineering insights categorized by topic.
              </p>
            </div>

            {/* Search Bar */}
            <div className="blog-controls">
              <div className="blog-search-box">
                <Search size={18} className="blog-search-icon" />
                <input
                  type="text"
                  className="blog-search-input"
                  placeholder="Search topics, articles, or concepts (e.g. JavaScript, Async, Caching)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Dynamic Topics Grid */}
            <div className="topics-grid">
              {filteredTopics.map((topic) => (
                <div
                  key={topic.slug}
                  className="topic-card"
                  style={{ "--topic-accent": topic.meta?.color || "#38bdf8" }}
                  onClick={() => navigateTo(`#blog/${topic.slug}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      navigateTo(`#blog/${topic.slug}`);
                    }
                  }}
                >
                  <div className="topic-card-top">
                    <div className="topic-icon-badge">
                      {topic.meta?.icon || "📁"}
                    </div>
                    <span className="topic-article-count">
                      {topic.articles.length} {topic.articles.length === 1 ? "article" : "articles"}
                    </span>
                  </div>

                  <div>
                    <h3 className="topic-name">{topic.title}</h3>
                    <p className="topic-desc">{topic.meta?.desc}</p>
                  </div>

                  <div className="topic-card-footer">
                    <span>Explore Topic</span>
                    <ArrowRight size={14} className="arrow-icon" />
                  </div>
                </div>
              ))}
            </div>

            {filteredTopics.length === 0 && (
              <div className="blog-empty-state">
                <div className="empty-icon">🔍</div>
                <h4 className="empty-title">No matching topics found</h4>
                <p className="empty-desc">
                  Try searching for another keyword or topic name.
                </p>
              </div>
            )}
          </>
        )}

        {/* =========================================================
            VIEW 2: ARTICLES LIST INSIDE TOPIC (#blog/:topic)
            ========================================================= */}
        {activeTopicSlug && !activeArticleSlug && (
          <>
            <div className="articles-view-header">
              <div className="topic-view-title-group">
                <div className="topic-icon-badge" style={{ width: 52, height: 52, fontSize: "1.8rem" }}>
                  {currentTopic?.meta?.icon || "📁"}
                </div>
                <div>
                  <h2 className="topic-view-title">{currentTopic?.title}</h2>
                  <span className="topic-view-folder-tag">
                    {currentTopic?.meta?.desc || `${filteredTopicArticles.length} Articles`}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="breadcrumb-btn"
                style={{ background: "var(--bg-tertiary)", padding: "0.5rem 0.85rem", border: "1px solid var(--border-subtle)" }}
                onClick={() => navigateTo("#blog")}
              >
                <ArrowLeft size={14} />
                <span>All Topics</span>
              </button>
            </div>

            {/* Topic Search Box */}
            <div className="blog-controls">
              <div className="blog-search-box">
                <Search size={18} className="blog-search-icon" />
                <input
                  type="text"
                  className="blog-search-input"
                  placeholder={`Search articles in ${currentTopic?.title}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Articles List */}
            <div className="articles-list">
              {filteredTopicArticles.map((article) => (
                <div
                  key={article.id}
                  className="article-item-card"
                  onClick={() => navigateTo(`#blog/${article.topicSlug}/${article.fileSlug}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      navigateTo(`#blog/${article.topicSlug}/${article.fileSlug}`);
                    }
                  }}
                >
                  <div className="article-item-main">
                    <span className="article-file-badge">
                      <Tag size={12} />
                      <span>{article.topicName}</span>
                    </span>
                    <h3 className="article-item-title">{article.title}</h3>
                    <p className="article-item-desc">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="article-item-meta">
                    <div className="article-read-btn">
                      <span>Read Article</span>
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredTopicArticles.length === 0 && (
              <div className="blog-empty-state">
                <div className="empty-icon">📝</div>
                <h4 className="empty-title">No articles found in this topic</h4>
                <p className="empty-desc">
                  Check back soon for new articles in {currentTopic?.title}.
                </p>
              </div>
            )}
          </>
        )}

        {/* =========================================================
            VIEW 3: ARTICLE READER (#blog/:topic/:file)
            ========================================================= */}
        {activeTopicSlug && activeArticleSlug && (
          <div className="article-reader-container">
            <div className="article-meta-banner">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span className="article-filename-tag">
                  <Tag size={13} />
                  <span>{currentTopic?.title}</span>
                </span>

                <button
                  type="button"
                  className="breadcrumb-btn"
                  style={{ background: "var(--bg-tertiary)", padding: "0.4rem 0.75rem", border: "1px solid var(--border-subtle)" }}
                  onClick={() => navigateTo(`#blog/${activeTopicSlug}`)}
                >
                  <ArrowLeft size={14} />
                  <span>Back to {currentTopic?.title || "Topic"}</span>
                </button>
              </div>

              <div className="article-author-row">
                <div className="author-info">
                  <div className="author-avatar">SR</div>
                  <div>
                    <strong style={{ color: "var(--text-primary)" }}>Sakshi Rautela</strong>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-dim)" }}>Software Engineer</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                    <Clock size={13} />
                    <span>{readTimeEstimate}</span>
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                    <Tag size={13} />
                    <span>{currentTopic?.title}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Markdown Body */}
            {isLoadingArticle ? (
              <div style={{ padding: "3rem", textAlign: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                Loading article content...
              </div>
            ) : (
              <MarkdownRenderer markdownText={currentArticleContent} />
            )}

            {/* Article Footer Navigation */}
            <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <button
                type="button"
                className="breadcrumb-btn"
                onClick={() => navigateTo(`#blog/${activeTopicSlug}`)}
                style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)", padding: "0.5rem 1rem" }}
              >
                <ArrowLeft size={14} />
                <span>Back to {currentTopic?.title || "Topic"}</span>
              </button>

              <button
                type="button"
                className="breadcrumb-btn"
                onClick={() => {
                  const blogEl = document.getElementById("blog");
                  if (blogEl) blogEl.scrollIntoView({ behavior: "smooth" });
                }}
                style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)", padding: "0.5rem 1rem" }}
              >
                <span>Back to Top ↑</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
