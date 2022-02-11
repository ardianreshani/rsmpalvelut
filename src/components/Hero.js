import React from "react";
import { Link } from "react-router-dom";
import avatar from "../images/hero.png";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h1>RSMPALVELUT</h1>
        <p>Jopa pienet muutokset, saavat suurta muutosta arkeesi.</p>
        <Link to="/contact" className="btn-primary">
          YHTEYSTIEDOT
        </Link>
      </div>
      <div className="hero-right">
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Hero;
