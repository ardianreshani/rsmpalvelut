import React from "react";
import Quality from "../images/quality.png";
import shield from "../images/shield.png";
import labourDay from "../images/labour-day.png";
import handshake from "../images/handshake.png";
const Whyus = () => {
  return (
    <div className="whyus">
      <div className="center">
        <h2>Why Choose Us</h2>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card-logo">
            <img src={Quality} alt="Quality" />
          </div>
          <div className="card-text">
            <h4>Quality</h4>
            <p>
              When carrying out the work,we use high-quality materials of proven
              origin. All building materials are of Finland origin.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-logo">
            <img src={handshake} alt="handshake" />
          </div>
          <div className="card-text">
            <h4>Integrity</h4>
            <p>
              We offer various types of services that make it easier for you to
              take care of renovation, conversion, cleaning,
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-logo">
            <img src={shield} alt="shield" />
          </div>
          <div className="card-text">
            <h4>Reliability</h4>
            <p>
              The implementation of the project is carefully monitored by the
              trusting hands and the meticulous eyes of the entrepreneur.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-logo">
            <img src={labourDay} alt="labourDay" />
          </div>
          <div className="card-text">
            <h4>Master</h4>
            <p>
              We strive for perfection in every job we do. Based on 10 years of
              experience, both regular and new customers trust the surroundings
              of their homes every year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
