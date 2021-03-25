import React from "react";

import { Link } from "react-router-dom";

import { scroller } from "react-scroll";

import "../Styles/Navbar.css";

const Navbar = () => {
  const scrollToHeader = () => {
    scroller.scrollTo("header-section", {
      duration: 1500,
    });
  };
  const scrollToAboutMe = () => {
    scroller.scrollTo("waves", {
      duration: 1500,
      offset: 110,
    });
  };
  const scrollToSkills = () => {
    scroller.scrollTo("skills-section", {
      duration: 1500,
      offset: -40,
    });
  };
  const scrollToPortfolio = () => {
    scroller.scrollTo("portfolio-section", {
      duration: 1500,
      offset: -40,
    });
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top ">
      <div className="container">
        <div className="gradient"> </div>
        <Link
          to="/"
          className="navbar-brand"
          href="#header-section "
          onClick={() => scrollToHeader()}
        >
          Welcome in my world of programming
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0 ml-auto">
            <li className="nav-item">
              <Link
                to="/"
                aria-current="page"
                // href="#about-me"
                onClick={() => scrollToAboutMe()}
                className="nav-link"
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                aria-current="page"
                className="nav-link"
                href="#skills"
                onClick={() => scrollToSkills()}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                href="#portfolio"
                onClick={() => scrollToPortfolio()}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link contact">
                Contact
              </Link>
            </li>
            <span className="nav-indicator"></span>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
