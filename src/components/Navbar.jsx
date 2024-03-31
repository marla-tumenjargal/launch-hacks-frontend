import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./css/navbar.css";
import "./style.css";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const closeMobileMenu = () => {
    setMobile(false);
  };

  return (
    <>
      <nav className="navbar">
        <p className="font">Website Outline</p>
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={closeMobileMenu}>
          <NavLink to="/" label="Dashboard" />
          <NavLink to="/resources" label="Resources" />
          <NavLink to="/contact" label="Contact" />
          <NavLink to="/about" label="About" />
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setMobile(!Mobile)}
          aria-label="Toggle Mobile Menu"
        ></button>
      </nav>
    </>
  );
};

const NavLink = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`nav-link ${isActive ? "active" : ""}`}>
      <li>{label}</li>
    </Link>
  );
};

export default Navbar;
