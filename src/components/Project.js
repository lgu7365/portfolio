import React from "react";

function Project() {
  return (
    <div className="project" id="3">
      <div className="project-title">
        <h2>Project</h2>
      </div>
      <div className="project-contents-box">
        <div className="project-contents">
          <div className="portfolio-img"></div>
          <div className="project-text">
            <h2 className="project-content-title">Portfolio</h2>
            <h3>포트폴리오 사이트입니다.</h3>
            <span className="project-nth">1인 프로젝트</span><br/>
            <span className="project-period">기간: 2022-11-16 ~ 2022-11-21</span>
            <ul className="project-skills">
              <li className="project-skill">HTML</li>
              <li className="project-skill">CSS</li>
              <li className="project-skill">React</li>
            </ul>
          </div>
          <a href="https://github.com/lgu7365/portfolio" className="project-github"><i className="fa-brands fa-github"/></a>
        </div>
        <div className="project-contents">
        <div className="clonecoding-img"></div>
          <div className="project-text">
            <h2 className="project-content-title">Clonecoding</h2>
            <h3>반응형 클론코딩</h3>
            <span className="project-nth">1인 프로젝트</span><br/>
            <span className="project-period">기간: 2022-10-27 ~ 2022-11-21</span>
            <ul className="project-skills">
              <li className="project-skill">HTML</li>
              <li className="project-skill">CSS</li>
              <li className="project-skill">Javascript</li>
            </ul>
          </div>
          <a href="https://github.com/lgu7365/cloncoding" className="project-github"><i className="fa-brands fa-github"/></a>
        </div>
      </div>
    </div>
  );
}

export default Project;