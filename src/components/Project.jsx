// src/components/Project.jsx
import React, { useState } from "react";
import "../css/Project.css";
import { projectData } from "./ProjectData";
import ProjectCard from "./ProjectCard";

const ArrowLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M15 18l-6-6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Project() {
  // ✅ id 5 → 4 → 3 → 2 → 1 순서로 정렬
  const sortedProjects = [...projectData].sort((a, b) => b.id - a.id);

  const [index, setIndex] = useState(0);
  const total = sortedProjects.length;

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  const nextSlide = () =>
    setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <div id="project-wrapper">
      <button
        className="arrow left"
        onClick={prevSlide}
        aria-label="Previous project"
      >
        <ArrowLeft />
      </button>

      <div id="project-container">
        {/* ✅ 정렬된 배열 사용 */}
        <ProjectCard project={sortedProjects[index]} />
      </div>

      <button
        className="arrow right"
        onClick={nextSlide}
        aria-label="Next project"
      >
        <ArrowRight />
      </button>
    </div>
  );
}

export default Project;
