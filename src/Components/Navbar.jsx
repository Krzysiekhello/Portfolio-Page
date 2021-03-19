import React from "react";

import { Element, scroller } from "react-scroll";

import "../Styles/Navbar.css";

const Navbar = () => {
  const scrollToAboutMe = () => {
    scroller.scrollTo("waves", {
      duration: 1500,
      delay: 100,
      smooth: " easeOutQuad",
      // offset: 100,
    });
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top ">
      <div className="container">
        <div className="gradient"> </div>
        <li className="navbar-brand" href="#">
          Welcome in my world of programming
        </li>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
            <li className="nav-item">
              <a
                onClick={() => scrollToAboutMe()}
                className="nav-link "
                aria-current="page"
                href="#"
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                My learning procees
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link contact" href="#">
                Contact
              </a>
            </li>
            <span className="nav-indicator"></span>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
