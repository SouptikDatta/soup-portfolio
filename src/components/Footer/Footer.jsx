import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Email: souptik13@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/nameless_person_2000?igsh=MTJ3MG5sdjFkZWYwdw==" target="_blank" rel="noopener noreferrer">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/Akshaydatta18?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://www.github.com/SouptikDatta" target="_blank" rel="noopener noreferrer">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
