import React, {useState} from "react";
import { Link } from 'react-router-dom';

function Header() {
  const [btn, setBtn] = useState(false);

  const toggle = () => {
    setBtn(!btn);
  }
  return (
    <header>
      <div className="name">
        <Link to="home">
          <div className="header_title">Home</div>
        </Link>
      </div>
      <ul className={"navbar" + (btn ? ' open' : '')}>
        <li><Link to="aboutme">About me</Link></li>
        <li><Link to="skills">Skills</Link></li>
        <li><Link to="project">Project</Link></li>
        <li><Link to="contact">Contact</Link></li>
      </ul>
      <div className="list" onClick={toggle}><i className="fa-solid fa-bars" /></div>
    </header>
  );
}

export default Header;