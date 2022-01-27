import React from "react";
import { Link } from "react-router-dom";

const Ctacall = () => {
  return (
    <div className="cta-call">
      <h2>Are you think to make some changes to your house ?</h2>
      <Link to="/contact" className="btn-primary">
        Contact us
      </Link>
    </div>
  );
};

export default Ctacall;
