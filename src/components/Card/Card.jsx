import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail,date, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">{date}</button>
    </div>
  );
};

export default Card;
