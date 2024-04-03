import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => {
    setMobile(false);
  };

  return (
    <>
      <nav className="navbar">
        <p className="font"> Product Name </p>
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={closeMobileMenu}>
          <NavLink to="/" label="Dashboard" />
          <NavLink to="/resources" label="Resources" />
          <NavLink to="/contact" label="Trivia" />
          <NavLink to="/about" label="About" />
          <NavLink to="/maps" label="Maps" />
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
      className={`nav-link ${isActive ? "active" : ""}`}
    >
      <li>{label}</li>
    </Link>
  );
};

export default Navbar;
