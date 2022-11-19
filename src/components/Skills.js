import React from "react";

function Skills() {
  return (
    <div className="skills">
      <div className="skills-title">
        <h2>Skills</h2>
      </div>
      <div className="skills-list">
        <div className="skills-list-content">
          <i className="fa-brands fa-html5"></i>
          <span>HTML/CSS</span>
          <div className="skills-list-text">
            웹표준을 준수하여 웹페이지를 제작할 수 있습니다.<br /> 
            Grid, Flex를 사용해 레이아웃을 잡을 수 있습니다.<br />
            css를 활용한 애니메이션을 구현할 수 있습니다.
          </div>
        </div>
        <div className="skills-list-content">
          <i className="fa-brands fa-square-js"></i>
          <span>Javascript</span>
          <div className="skills-list-text">
            기본 문법을 이해하고 동적 웹사이트를 구현할 수 있습니다.<br />
            bootstrap 라이브러리를 사용할 수 있습니다.
          </div>
        </div>
        <div className="skills-list-content">
          <i className="fa-brands fa-react"></i>
          <span>React.js</span>
          <div className="skills-list-text">
            기본 문법을 이해하고 Hooks를 사용할 수 있습니다.
          </div>
        </div>
        <div className="skills-list-content">
          <i className="fa-brands fa-node-js"></i>
          <span>Node.js</span>
          <div className="skills-list-text">
            express에 대한 기본지식이 있고 socket.io 라이브러리를 사용해본 적 있습니다.
          </div>
        </div>
        <div className="skills-list-content">
          <i className="fa-brands fa-github"></i>
          <span>git/github</span>
          <div className="skills-list-text">
            기본적인 개념과 명령어를 숙지하고 있습니다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;