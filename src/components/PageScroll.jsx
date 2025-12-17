import React, { useEffect, useState } from "react";
import "../css/PageScroll.css";

function PageScroll({ currentSection, setCurrentSection }) {
  const [scrolling, setScrolling] = useState(false);
  const [sectionCount, setSectionCount] = useState(0);

  // Tooltip 표시용 섹션 이름
  const sectionNames = ["Main", "Profile", "Project", "Contact"];

  useEffect(() => {
    const sections = document.querySelectorAll(
      "section, #main-wrapper, #profile-wrapper, #project-wrapper, #contact-wrapper"
    );
    setSectionCount(sections.length);

    const handleWheel = (e) => {
      e.preventDefault();
      if (scrolling) return;

      setScrolling(true);

      const delta = e.deltaY;
      if (delta > 0 && currentSection < sections.length - 1) {
        setCurrentSection((prev) => prev + 1);
      } else if (delta < 0 && currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
      }

      setTimeout(() => setScrolling(false), 900);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentSection, scrolling]);

  // 스크롤 이동
  useEffect(() => {
    window.scrollTo({
      top: currentSection * window.innerHeight,
      behavior: "smooth",
    });
  }, [currentSection]);

  return (
    <div className="page-scroll-dots">
      {Array.from({ length: sectionCount }).map((_, i) => (
        <div
          key={i}
          className={`page-dot ${i === currentSection ? "active" : ""}`}
          onClick={() => setCurrentSection(i)}
        >
          {/* Tooltip */}
          <span className="dot-tooltip">
            {sectionNames[i] || `Section ${i + 1}`}
          </span>
        </div>
      ))}
    </div>
  );
}

export default PageScroll;
