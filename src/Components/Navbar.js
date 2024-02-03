import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [slide, setSlide] = useState(false);

  return (
    <>
      <div className="nav-cont">
        <div className="nav-logo">PORTFOLIO</div>
        <div className="nav-links">
          <nav>
            <ul>
              <NavLink to={"/"}>HOME</NavLink>
              <NavLink to={"#"}>ABOUT</NavLink>
              <NavLink to={"/projects"}>PROJECTS</NavLink>
              <NavLink to={"/contact"}>CONTACT</NavLink>
            </ul>
          </nav>
        </div>
        <div className="ham-logo" onClick={() => setSlide(!slide)}>
          {!slide && <GiHamburgerMenu />}
          {slide && <CgClose />}
        </div>
      </div>
      <div id="slide-bar" className={slide ? "slide" : ""}>
        <nav>
          <ul>
            <NavLink to={"/"} onClick={() => setSlide(false)}>
              HOME
            </NavLink>
            <NavLink to={"#"} onClick={() => setSlide(false)}>
              ABOUT
            </NavLink>
            <NavLink to={"/projects"} onClick={() => setSlide(false)}>
              PROJECTS
            </NavLink>
            <NavLink to={"/contact"} onClick={() => setSlide(false)}>
              CONTACT
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
