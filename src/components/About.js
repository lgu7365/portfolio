import React from "react";

function About() {
  return (
    <div className="about" id="1">
      <div className="about-title">
        <h2>About me</h2>
      </div>
      <div className="about-contents">
        <h2>안녕하세요.<br /> 끊임없이 공부하는 개발자 이건우입니다.</h2>
        <div className="about-list">
          <div className="about-list-content">
            <span>생년월일</span>
            <div className="about-list-text date">
              2001.01.22
            </div>
          </div>
          <div className="about-list-content">
            <span>학력</span>
            <div className="about-list-text education">
              한국기술교육대학교
              (컴퓨터공학부 휴학)
            </div>
          </div>
          <div className="about-list-content">
            <span>주소지</span>
            <div className="about-list-text address">
              대전광역시 유성구
            </div>
          </div>
          <div className="about-list-content">
            <span>자격증</span>
            <div className="about-list-text certificate">
              컴퓨터활용능력1급, 정보처리산업기사
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;