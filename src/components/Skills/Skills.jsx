import React, { useContext } from "react";
import "./Skills.css";
import Tailwind from "../../img/Tailwind.png";
import Nodejs from "../../img/Nodejs.png";
import Reactjs from "../../img/Reactjs.png";
import Javascript from "../../img/Javascript.png";
import MongoDB from "../../img/MongoDB.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';

const Skills = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="skills" id="skills">
      {/* left side */}
      <div className="skills-left">
        <div className="skills-content">
          {/* dark Mode */}
          <span className="skills-title" style={{ color: darkMode ? "white" : "" }}>
            My Skills
          </span>
          <span className="skills-subtitle">Latest Technologies</span>
          <span className="skills-description">
            <strong>Frontend</strong>
            <br />
            React js, HTML, CSS3, Javascript, Axios
            <br />
            <strong>Backend</strong>
            <br />
            Node, Express, MongoDB, APIs
            <br />
            <strong>Programming Languages :</strong> C++
            <br />
            <strong>Other Libraries & Frameworks</strong>
            <br />
            Material UI, Tailwind CSS, DaisyUI, Bootstrap
            <br />
            <strong>Backend-as-a-Service :</strong> Firebase
            <br />
            <strong>Database :</strong> SQL
            <br />
            <strong>Tools</strong>
            <br />
            Git, Postman, Github, Bitbucket, etc.
            <br />
            <strong>Deployments</strong>
            <br />
            Netlify, Vercel, Render
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      
      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Javascript} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Nodejs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Reactjs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Tailwind} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={MongoDB} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Skills;
