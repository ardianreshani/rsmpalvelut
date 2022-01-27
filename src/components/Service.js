import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="home-service">
      <div className="center">
        <h2>Service</h2>
      </div>
      <div className="grid">
        <div class="box a">
          <h2>House Renovation</h2>
          <Link to="/services">
            See more photos{" "}
            <span className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27.207"
                height="17.414"
                viewBox="0 0 37.207 27.414"
              >
                <g id="arow" transform="translate(-1027 -2682.793)">
                  <line
                    id="Line_1"
                    data-name="Line 1"
                    x2="36"
                    transform="translate(1027.5 2696.5)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-width="2"
                  />
                  <line
                    id="Line_2"
                    data-name="Line 2"
                    x2="13"
                    y2="13"
                    transform="translate(1050.5 2683.5)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-width="2"
                  />
                  <line
                    id="Line_3"
                    data-name="Line 3"
                    y1="13"
                    x2="13"
                    transform="translate(1050.5 2696.5)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-width="2"
                  />
                </g>
              </svg>
            </span>
          </Link>
        </div>
        <div class="box c">
          <h2> Outside House</h2>
          <Link to="/services">
            See more photos{" "}
            <span className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27.207"
                height="17.414"
                viewBox="0 0 37.207 27.414"
              >
                <g id="arow" transform="translate(-1027 -2682.793)">
                  <line
                    id="Line_1"
                    data-name="Line 1"
                    x2="36"
                    transform="translate(1027.5 2696.5)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-width="2"
                  />
                  <line
                    id="Line_2"
                    data-name="Line 2"
                    x2="13"
                    y2="13"
                    transform="translate(1050.5 2683.5)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-width="2"
                  />
                  <line
                    id="Line_3"
                    data-name="Line 3"
                    y1="13"
                    x2="13"
                    transform="translate(1050.5 2696.5)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-width="2"
                  />
                </g>
              </svg>
            </span>
          </Link>
        </div>
        <div class="box d">
          <h2>House Cleaning </h2>
          <Link to="/services">
            See more photos{" "}
            <span className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27.207"
                height="17.414"
                viewBox="0 0 37.207 27.414"
              >
                <g id="arow" transform="translate(-1027 -2682.793)">
                  <line
                    id="Line_1"
                    data-name="Line 1"
                    x2="36"
                    transform="translate(1027.5 2696.5)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-width="2"
                  />
                  <line
                    id="Line_2"
                    data-name="Line 2"
                    x2="13"
                    y2="13"
                    transform="translate(1050.5 2683.5)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-width="2"
                  />
                  <line
                    id="Line_3"
                    data-name="Line 3"
                    y1="13"
                    x2="13"
                    transform="translate(1050.5 2696.5)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-width="2"
                  />
                </g>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
