import React, { useEffect, useRef, useState } from "react";
import "../css/Profile.css";
import ProfilePhoto2 from "../img/profile_2.jpeg";

import IconPS from "../icons/photoshop-original.svg";
import IconILL from "../icons/illustrator-original.svg";
import IconHTML from "../icons/html5.svg";
import IconCSS from "../icons/css3-original-wordmark.svg";
import IconJS from "../icons/javascript-original.svg";
import IconReact from "../icons/react-original.svg";
import IconJQ from "../icons/jquery-original-wordmark.svg";
import IconPHP from "../icons/php-original.svg";
import IconSQL from "../icons/mysql-plain-wordmark.svg";
import IconVUE from "../icons/vuejs-original.svg";
import IconFIGMA from "../icons/figma-original.svg";
import IconNEXTJS from "../icons/nextjs-original.svg";
import IconMONGO from "../icons/mongodb-original.svg";
import IconAWS from "../icons/amazonwebservices-original-wordmark.svg";
import IconGIT from "../icons/github-original.svg";
import IconNODEJS from "../icons/nodejs-original.svg";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// 스킬별 퍼센트
const skills = [
  { name: "Figma", src: IconFIGMA, percent: 95 },
  { name: "PhotoShop", src: IconPS, percent: 95 },
  { name: "Illustrator", src: IconILL, percent: 90 },
  { name: "HTML", src: IconHTML, percent: 100 },
  { name: "CSS", src: IconCSS, percent: 100 },
  { name: "JavaScript", src: IconJS, percent: 90 },
  { name: "jQuery", src: IconJQ, percent: 90 },
  { name: "Vue.js", src: IconVUE, percent: 90 },
  { name: "React", src: IconReact, percent: 90 },
  { name: "Next.js", src: IconNEXTJS, percent: 85 },
  { name: "Node.js", src: IconNODEJS, percent: 85 },
  { name: "Bootstrap", src: IconCSS, percent: 90 },
  { name: "PHP", src: IconPHP, percent: 90 },
  { name: "MySQL", src: IconSQL, percent: 85 },
  { name: "MongoDB", src: IconMONGO, percent: 90 },
  { name: "Amazon Web Services", src: IconAWS, percent: 90 },
  { name: "GitHub", src: IconGIT, percent: 90 },
];

const Profile = () => {
  const skillSectionRef = useRef(null);
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateSkills(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillSectionRef.current) {
      observer.observe(skillSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="profile-page-bg">
      <div className="profile-container">
        <div className="profile-left">
          <div className="profile-top">
            <div className="profile-image">
              <img src={ProfilePhoto2} alt="장유리 프로필" />
            </div>
            <div className="profile-name">장 유 리</div>
            <div className="profile-birth">2000.01.01</div>
          </div>
          <div className="profile-contact">
            <div className="info-item">
              <FaPhoneAlt className="icon" />
              <span className="info-label">Phone</span>
              <span className="info-text">010-6734-3440</span>
            </div>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <span className="info-label">E-mail</span>
              <span className="info-text">yuriyu20101@gmail.com</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <span className="info-label">Address</span>
              <span className="info-text">경기도 안산시</span>
            </div>
          </div>


        </div>

        <div className="profile-right">
          <div className="profile-info">
            <div className="profile-section">
              <h3>EDUCATION</h3>
              <p>2019.03 - 2024.02</p>
              <p>성결대학교 국제개발협력학과 졸업</p>
            </div>

            <div className="profile-section">
              <h3>TRAINING</h3>
              <p>2025.04 - 2025.10</p>
              <p>
                생성형AI 기반 UX/UI 디자인 & 프론트엔드 개발과정
                <br /> (ChatGPT, 일러, 포토, 피그마, 자바스크립트, 리액트) 수료
              </p>
            </div>

            <div className="profile-section">
              <h3>LICENSE</h3>
              <p>2023.04.23</p>
              <p>운전면허증 2종 보통</p>
            </div>
          </div>

          <div className="skillsec" ref={skillSectionRef}>
            <h3>SKILLS</h3>
            {skills.map((skill) => (
              <div className="skill-bar" key={skill.name}>
                <img src={skill.src} alt={skill.name} className="skill-icon" />
                <span>{skill.name}</span>
                <div className="skill-progress">
                  <div
                    className="skill-fill"
                    style={{
                      width: animateSkills ? `${skill.percent}%` : "0%",
                      transition: "width 1s ease-in-out",
                    }}
                  >
                    {animateSkills ? `${skill.percent}%` : ""}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
