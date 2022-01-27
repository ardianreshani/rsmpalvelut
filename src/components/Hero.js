import React from "react";
import { Link } from "react-router-dom";
import avatar from "../images/hero img v2.png";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h1>RSMPALVELUT</h1>
        <p>Paint beautiful colourful walls to freshen things up</p>
        <Link to="/contact" className="btn-primary">
          Contact us
        </Link>
      </div>
      <div className="hero-right">
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Hero;
