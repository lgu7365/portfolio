import React, {useState, useEffect} from "react";
import { Link } from 'react-scroll';

function Header() {
  const [btn, setBtn] = useState(false);
  const [changeheader, setChangeheader] = useState(false);
  const toggle = () => {
    setBtn(!btn);
  }
  const closebtn = () => {
    setBtn(false);
  }
  const scrollscreen = () => {
    if(window.pageYOffset > 0){
      setChangeheader(true);
    }
    else if(window.pageYOffset == 0){
      setChangeheader(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollscreen);
  })
  return (
    <header className={(changeheader ? 'changeheader' : '')}>
      <div className="name">
          <div className="header-title"><Link to="0" spy={true} smooth={true}>Home</Link></div>
      </div>
      <ul className={"navbar" + (btn ? ' open' : '')}>
        <li><Link to="1" spy={true} smooth={true} onClick={closebtn} offset={-70}>About me</Link></li>
        <li><Link to="2" spy={true} smooth={true} onClick={closebtn} offset={-70}>Skills</Link></li>
        <li><Link to="3" spy={true} smooth={true} onClick={closebtn} offset={-70}>Project</Link></li>
        <li><Link to="4" spy={true} smooth={true} onClick={closebtn}>Contact</Link></li>
      </ul>
      <div className="list" onClick={toggle}><i className={(btn ? "fa-solid fa-x" : "fa-solid fa-bars")} /></div>
    </header>
  );
}

export default Header;