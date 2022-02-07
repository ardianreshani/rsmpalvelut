import React from "react";
import { Link } from "react-router-dom";

const Ctacall = () => {
  return (
    <div className="cta-call">
      <h2>Ajatteletko tehdä muutoksia kotiisi ?</h2>
      <Link to="/contact" className="btn-primary">
        YHTEYSTIEDOT
      </Link>
    </div>
  );
};

export default Ctacall;
