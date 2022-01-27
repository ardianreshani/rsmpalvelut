import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../images/logowithout the text.png";
const Navbar = ({ open, setOpen }) => {
  let className = "menu";
  let hamburger = "hamburger";
  if (open) {
    className = "menu on";
    hamburger = "hamburger on";
  }
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          {" "}
          <img src={logo} alt="logo" width="120px" />
        </Link>
        <div className={hamburger} onClick={() => setOpen(!open)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <ul className={className}>
        <li>
          <NavLink to="/" onClick={() => setOpen(!open)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setOpen(!open)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={() => setOpen(!open)}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setOpen(!open)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
