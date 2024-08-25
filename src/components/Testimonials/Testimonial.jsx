import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Pborbit from "../../img/Pborbit.png";
import Krivitech from "../../img/Krivitech.png";
import Freight from "../../img/Freight.png";

const Testimonial = () => {
  const clients = [
    {
      img: Pborbit,
      project: 'Pb-Orbit ',
      review:
        "Developed frontend & it’s integration with backend of a Pickleball tournament and game organization software using React , MUI, Postman Connected 21 APIs in  25+ reusable components & optimized software over 30%. 15+ pages showcasing all  Player & Event admin functionalities, Communities, Events , Matches etc ."
    },
    {
      img: Krivitech,
      project: 'Krivitech ',
      review:
        "Handled the entire development using React, MaterialUI of a fully responsive website of it’s client & delivered within 2 weeks.",
    },
    {
      img: Freight,
      project: 'Freight-Orbit ',
      review:
        "Admin dashboard using React, MUI, & Ant Design, having 10+ pages for efficient data management & visualization. Visually appealing responsive UI thorugh 5 interactive charts, 20+ custom components.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <span className="t-heading">Work Experience</span>
      <div className="t-heading">
        <span>Software Developer</span>
        <span> Internship </span>
        <span>(Feb, 2024 - July,2024)</span>
        <h4>At Synopix</h4>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <div className="testimonial-content">
                  <span className="project-name">{client.project}</span>
                  <span className="review">{client.review}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
