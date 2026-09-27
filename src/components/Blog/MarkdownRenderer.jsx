import React, { useEffect, useMemo } from "react";
import { marked } from "marked";
import "../../styles/BlogSection.css";

export default function MarkdownRenderer({ markdownText }) {

  // Configure marked for clean, secure and GitHub flavored output
  const htmlContent = useMemo(() => {
    if (!markdownText) return "";

    marked.setOptions({
      gfm: true,
      breaks: true,
      pedantic: false,
    });

    try {
      return marked.parse(markdownText);
    } catch (e) {
      console.error("Markdown parsing error:", e);
      return `<p>${markdownText}</p>`;
    }
  }, [markdownText]);

  // Attach copy listeners to pre/code blocks after DOM render
  useEffect(() => {
    const codeBlocks = document.querySelectorAll(".markdown-content pre");
    
    codeBlocks.forEach((pre, index) => {
      // Avoid duplicate copy buttons
      if (pre.querySelector(".code-copy-btn")) return;

      const codeElement = pre.querySelector("code");
      const button = document.createElement("button");
      button.className = "code-copy-btn";
      button.setAttribute("type", "button");
      button.setAttribute("title", "Copy code");
      button.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <span>Copy</span>
      `;

      button.onclick = (e) => {
        e.stopPropagation();
        const codeText = codeElement ? codeElement.innerText : pre.innerText;
        navigator.clipboard.writeText(codeText).then(() => {
          button.classList.add("copied");
          button.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span style="color: #10b981;">Copied!</span>
          `;
          setTimeout(() => {
            button.classList.remove("copied");
            button.innerHTML = `
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>Copy</span>
            `;
          }, 2000);
        });
      };

      pre.style.position = "relative";
      pre.appendChild(button);
    });
  }, [htmlContent]);

  return (
    <div
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
