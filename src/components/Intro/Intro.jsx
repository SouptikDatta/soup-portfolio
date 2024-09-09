import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/portfolio.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import TypingEffect from 'react-typing-effect';

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro p-2 md:p-10 pt-0" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <div >
            <TypingEffect
              text={['Souptik Datta']}
              speed={50}
              eraseDelay={1000}
              typingDelay={200}
              cursorRenderer={cursor => <h2>{cursor}</h2>}
              displayTextRenderer={text => (
                <span style={{ fontSize:'2.7rem', fontWeight:800 }}>{text}</span>
              )}
            />
          </div>
          <p className="md:w-[75%]">
            FullStack Developer with hands-on experience in designing, developing, 
            implementing applications and solutions using wide range of technologies and programming languages.
            <br/>
            Actively seeking new opportunities to contribute to dynamic development teams.
          </p>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a className="duration-300 ease-in-out hover:scale-75" href="https://github.com/SouptikDatta" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="GitHub" />
          </a>
          <a className="duration-300 ease-in-out hover:scale-75" href="https://www.linkedin.com/in/souptikdatta" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a className="duration-300 ease-in-out hover:scale-75" href="https://www.instagram.com/nameless_person_2000" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <div className="image-wrapper">
          <LazyLoadImage src={Vector1} alt="Vector1" effect="blur" className="absolute top-[-6rem] left-[10rem] md:top-0 md:left-0" />
        </div>
        <div className="image-wrapper">
          <LazyLoadImage src={Vector2} alt="Vector2" effect="blur" className="absolute top-[-10rem] left-[10rem] md:top-0 md:left-0" />
        </div>
        <div className="image-wrapper">
          <LazyLoadImage src={boy} alt="boy" effect="blur" className="absolute top-[-13rem] left-[10rem] md:top-[-16rem] md:left-[8rem]" />
        </div>
        {/* animation */}
        <motion.img
          initial={{ left: "-56%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "34%" }}
          whileInView={{ left: "62%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Leadership" text2="quality" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Problem" text2="Solver" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
