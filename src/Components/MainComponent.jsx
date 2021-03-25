import React from "react";

import AboutMe from "./AboutMe";
import Header from "./Header.jsx";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

const MainComponent = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Skills id="skills" />
      <Portfolio id="portfolio" />
    </>
  );
};

export default MainComponent;
