import React from "react";
import "../css/Contact.css";
import { FaPhoneAlt, FaEnvelope, FaComment, FaArrowUp } from "react-icons/fa";
import profileImg from "../img/contact_photo2.png";
import kakaoqr from "../img/kakaoqr.jpg";

function Contact({ setCurrentSection }) {
  // 페이지 최상단으로 스크롤
const scrollToTop = () => {
+  setCurrentSection(0); // ⭐ PageScroll dot도 맨 위로 이동
   window.scrollTo({ top: 0, behavior: "smooth" });
};


  return (
    <div id="contact-wrapper">
      <div id="title">CONTACT ME</div>

      <div className="contact-content">
        {/* 왼쪽 프로필 영역 */}
        <div className="profile-circle">
          <img src={profileImg} alt="Profile" />
        </div>

        {/* 오른쪽 연락 정보 */}
        <div className="info-section">
          <div className="info-item phonecall">
            <FaPhoneAlt className="icon" />
            <span>010-6734-3440</span>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>yuriyu20101@gmail.com</span>
          </div>
          <div className="info-item">
            <FaComment className="icon" />
            <span>jyuri01</span>
            <img src={kakaoqr} alt="카카오톡QR " />
          </div>
        </div>
      </div>

      {/* 하단 문구 */}
      <div className="footer-text">
        <p>저의 포트폴리오를 읽어주셔서 감사합니다.</p>
        <p>소중한 연락을 기다리겠습니다.</p>
      </div>

      {/* 맨 아래 공간 + bottom-bar */}
      <div className="bottom-space">
        <div className="bottom-left">
          본 포트폴리오는 상업적 목적이 없습니다.
        </div>

        <button className="top-button" onClick={scrollToTop}>
          <FaArrowUp />
          <span className="top-text">TOP</span>
        </button>

        <div className="bottom-right">
          © 2025 Yuri Jang. All Rights Reserved.
        </div>
      </div>


    </div>
  );
}
export default Contact;
