import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header.jsx";
import Navbar from "./Components/Navbar.jsx";
import Skills from "./Components/Skills";

import "./Styles/App.css";

const App = () => {
  return (
    <div className="app">
      <div className="app-bar">
        <Navbar />
      </div>
      <Header />
      <AboutMe id="about-me" />
      <Skills id="skills" />
    </div>
  );
};

export default App;
