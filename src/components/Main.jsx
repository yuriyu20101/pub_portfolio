import React from "react";
import "../css/Main.css";
import ProfilePic from "../img/Group 6.png";
import ProfilePhoto from "../img/profile1.png";

function Main() {
  return (
    <div id="main-wrapper">
      <div id="title">PORTFOLIO</div>

      <div id="profile-wrapper">
        <div className="side-text">
          안녕하세요, <br />
          감성과 기능을 연결하는
        </div>
        <div id="profileimg">
          <img src={ProfilePhoto} alt="프로필 사진" />
        </div>
        <div className="side-text">
          UI/UX 웹퍼블리셔
          <br /> 장유리입니다.
        </div>
      </div>
    </div>
  );
}

export default Main;
