import { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HistorySection from "./components/HistorySection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import LeetCodeSection from "./components/LeetCodeSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import "./styles/global.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isBlogPage, setIsBlogPage] = useState(() => {
    return typeof window !== "undefined" && window.location.hash.startsWith("#blog");
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const isBlog = hash.startsWith("#blog");
      setIsBlogPage(isBlog);

      if (isBlog) {
        setActiveSection("blog");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (hash) {
        const targetId = hash.replace("#", "");
        setActiveSection(targetId || "hero");
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        setActiveSection("hero");
      }
    };

    handleHashChange();

    const handleScroll = () => {
      if (isBlogPage) return;

      const sections = ["hero", "history", "experience", "projects", "leetcode", "stack", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [isBlogPage]);

  return (
    <div className="portfolio-app">
      <Header activeSection={activeSection} />
      <main className="page-container">
        {isBlogPage ? (
          <BlogSection />
        ) : (
          <>
            <HeroSection />
            <HistorySection />
            <ExperienceSection />
            <ProjectsSection />
            <LeetCodeSection />
            <SkillsSection />
            <EducationSection />
            <ContactSection />
          </>
        )}
      </main>
    </div>
  );
}
