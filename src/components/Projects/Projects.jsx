import React, { useContext } from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Tastyeats from "../../img/Tastyeats.png";
import Krivitech from "../../img/Krivitech.png";
import Goldsgym from "../../img/Goldsgym.png";
import Homyz from "../../img/Homyz.png";
import Socialoo from '../../img/Socialoo.png'
import { themeContext } from "../../Context";

const Projects = () => {
  const projectData = [
    { img: Tastyeats, link: "https://tasty-eats.vercel.app/" },
    { img: Krivitech, link: "https://krivitech-web.netlify.app/" },
    { img: Goldsgym, link: "https://souptik-golds-gym.netlify.app/" },
    { img: Homyz, link: "https://suchi-soup-homyz-app.netlify.app/" },
    { img: Socialoo, link: "https://socialoo-suchi-soup.netlify.app/"}
  ];
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="projects" id="projects">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Made</span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="projects-slider"
      >
        {projectData.map((project, index) => (
          <SwiperSlide key={index}>
            <a href={project.link}>
              <div className="project-card">
                <img src={project.img} alt="" />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
