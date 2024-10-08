import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const navbar = () => {
  return (
    <div className="n-wrapper p-2 md:p-10 pt-2 pb-2" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Souptik.</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="education" spy={true} smooth={true}>
                Education
              </Link>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
