import React from "react";
import "../css/ProjectCard.css";

function ProjectCard({ project }) {
  const frameFeatureMap = {
    1: "HTML / CSS",
    2: "JavaScript / PHP",
    3: "VUE",
    4: "React",
    5: "Next.js / MongoDB",
  };

  // PC 프레임 렌더링 함수
  const renderPCFrame = () => (
    <div className={`project-image pc-frame ${project.id === 5 ? "id-5" : ""}`}>
      {/* PC 프레임 위 기능 표시 (한 번만) */}
      {frameFeatureMap[project.id] && project.id !== 3 && (
        <div className={`frame-feature ${project.id === 5 ? "id-5" : ""}`}>
          {frameFeatureMap[project.id]}
        </div>
      )}
      <div className="inner-box">
        <img
          src={project.contentImage}
          alt={project.title}
          className={`content-image ${project.id === 5 ? "id-5" : ""}`}
        />
      </div>
      <img src={project.frameImage} alt="PC frame" className="frame-image" />

      {/* id:1,2,4 전용 버튼 (PC용) */}
      {project.links && [1, 2, 4].includes(project.id) && (
        <div className={`project-links id-${project.id}`}>
          {project.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="project-card" style={{ backgroundColor: project.color }}>
      {/* PC 프레임 */}
      {!project.isMobile && renderPCFrame()}

      {/* 모바일 전용 프레임 */}
      {project.isMobile && (
        <div
          className={`project-image mobile-frame ${
            project.id === 5 ? "id-5" : ""
          }`}
        >
          {/* id:3 모바일 프레임 위 기능 표시 */}
          {project.id === 3 && frameFeatureMap[project.id] && (
            <div
              className="frame-feature"
              style={{ top: "-65px", left: "20px" }}
            >
              {frameFeatureMap[project.id]}
            </div>
          )}
          <div className="inner-box">
            <img
              src={project.contentImage}
              alt={project.title}
              className={`content-image ${project.id === 5 ? "id-5" : ""}`}
            />
          </div>
          <img src={project.frameImage} alt="frame" className="frame-image" />

          {/* id:3 전용 버튼 (모바일용) */}
          {project.id === 3 && project.links && (
            <div className="project-links mobile id-3">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 모바일 화면 (id:5용) */}
      {project.screens?.mobile && (
        <div
          className={`project-image mobile-frame pc-overlay ${
            project.id === 5 ? "id-5" : ""
          }`}
        >
          <div className="image-wrapper">
            <img
              src={project.screens.mobile.contentImage}
              alt={project.title}
              className={`content-image ${project.id === 5 ? "id-5" : ""}`}
            />
          </div>
          <img
            src={project.screens.mobile.frameImage}
            alt="mobile frame"
            className="frame-image"
          />
        </div>
      )}

      {/* 태블릿 화면 (id:5용) */}
      {project.screens?.tablet && (
        <div
          className={`project-image tablet-frame ${
            project.id === 5 ? "pc-overlay id-5" : ""
          }`}
        >
          <div className="inner-box">
            <img
              src={project.screens.tablet.contentImage}
              alt={project.title}
              className={`content-image ${project.id === 5 ? "id-5" : ""}`}
            />
          </div>
          <img
            src={project.screens.tablet.frameImage}
            alt="tablet frame"
            className="frame-image"
          />
        </div>
      )}

      {/* 프로젝트 정보 */}
      <div className={`project-info ${project.id === 5 ? "id-5" : ""}`}>
        <div className="project-number">{project.number}</div>

        <div className="project-tools">
          {project.tools?.map((tool) => (
            <div key={tool.id} className="project-tool" title={tool.name}>
              <img src={tool.src} alt={tool.name} />
            </div>
          ))}
        </div>

        {/* ✅ id:5 전용 버튼 (프레임과 독립 박스) */}
        {project.id === 5 && project.links && (
          <div className="project-links id-5 separate">
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        <h2 className="project-title">{project.title}</h2>
        <p className="project-period">{project.period}</p>
        <p className="project-description">{project.description}</p>

        <p className="project-function-title">주요 기능 구현</p>
        <ul className="project-function-list">
          {project.functions?.map((fn, i) => (
            <li key={i} className="project-function-item">
              {fn.replace(/<iframe>/g, "&lt;iframe&gt;")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
