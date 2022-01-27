import React from "react";
import { NavLink } from "react-router-dom";
import logoWhite from "../images/LOGOinWhite.png";
import trusLogo from "../images/trust.jpg";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logoWhite} alt="logoWhite" />
          <img src={trusLogo} alt="trusLogo" />
        </div>
        <div className="footer-menu">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <div className="footer-contact-items">
            <p>
              {" "}
              <span className="footer-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34.491"
                  height="34.551"
                  viewBox="0 0 34.491 34.551"
                >
                  <path
                    id="Icon_feather-phone-call"
                    data-name="Icon feather-phone-call"
                    d="M22.575,7.5A7.5,7.5,0,0,1,28.5,13.425M22.575,1.5A13.5,13.5,0,0,1,34.5,13.41M33,25.38v4.5a3,3,0,0,1-3.27,3,29.685,29.685,0,0,1-12.945-4.6,29.25,29.25,0,0,1-9-9A29.685,29.685,0,0,1,3.18,6.27,3,3,0,0,1,6.165,3h4.5a3,3,0,0,1,3,2.58A19.26,19.26,0,0,0,14.715,9.8a3,3,0,0,1-.675,3.165l-1.905,1.9a24,24,0,0,0,9,9l1.9-1.905a3,3,0,0,1,3.165-.675,19.26,19.26,0,0,0,4.215,1.05A3,3,0,0,1,33,25.38Z"
                    transform="translate(-1.667 0.156)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                  />
                </svg>
              </span>
              +358 45 277 2999 <br />
              +358 40 175 3800
            </p>
          </div>
          <div className="footer-contact-items">
            <p>
              {" "}
              <span className="footer-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34.178"
                  height="27"
                  viewBox="0 0 34.178 27"
                >
                  <g
                    id="Icon_feather-mail"
                    data-name="Icon feather-mail"
                    transform="translate(-0.911 -4.5)"
                  >
                    <path
                      id="Path_40"
                      data-name="Path 40"
                      d="M6,6H30a3.009,3.009,0,0,1,3,3V27a3.009,3.009,0,0,1-3,3H6a3.009,3.009,0,0,1-3-3V9A3.009,3.009,0,0,1,6,6Z"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                    <path
                      id="Path_41"
                      data-name="Path 41"
                      d="M33,9,18,19.5,3,9"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                  </g>
                </svg>
              </span>
              info@rsmpalvelut.com <br />
              myynti@rsmpalvelut.com
            </p>
          </div>
          <div className="footer-contact-items">
            <p>
              {" "}
              <span className="footer-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="36"
                  viewBox="0 0 30 36"
                >
                  <g
                    id="Icon_feather-map-pin"
                    data-name="Icon feather-map-pin"
                    transform="translate(-3)"
                  >
                    <path
                      id="Path_38"
                      data-name="Path 38"
                      d="M31.5,15C31.5,25.5,18,34.5,18,34.5S4.5,25.5,4.5,15a13.5,13.5,0,1,1,27,0Z"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                    <path
                      id="Path_39"
                      data-name="Path 39"
                      d="M22.5,15A4.5,4.5,0,1,1,18,10.5,4.5,4.5,0,0,1,22.5,15Z"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                  </g>
                </svg>
              </span>
              Lepinkatu 56,
              <br />
              Karjaa 10300 Finland
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
