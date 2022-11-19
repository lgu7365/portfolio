import React from "react";

function Contact() {
  return (
    <div className="contact" id="4">
      <div className="contact-title">
        <h2>contact</h2>
      </div>
      <div className="contact-list">
        <div className="email">
          <i className="fa-solid fa-envelope"></i>
          lgu_lgu@naver.com
        </div>
        <div className="phone">
          <i className="fa-solid fa-phone"></i>
          010-7450-0171
        </div>
        <div className="github">
          <a href="https://github.com/lgu7365"><i className="fa-brands fa-github"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;