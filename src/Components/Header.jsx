import React, { useState } from "react";
import { Element, scroller } from "react-scroll";

import Clock from "./Clock";
import "../Styles/Header.css";

import closeTag from "../png/closetag.png";
import openTag from "../png/opentag.png";
import waves from "../png/waves.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

const helloWord = "Hello,";

const Header = () => {
  const [letterItem, setLetterItem] = useState(null);
  const helloWordArr = helloWord.split("");
  console.log(helloWordArr);

  const mappedhelloWordArr = helloWordArr.map((el, index) => (
    <span
      key={index}
      onMouseOver={() => setLetterItem(index)}
      onMouseOut={() => setLetterItem(null)}
      className={
        index === letterItem ? "hello-header-text active" : "hello-header-text"
      }
    >
      {el}
    </span>
  ));
  const scrollToAboutMe = () => {
    scroller.scrollTo("waves", {
      duration: 1500,
      delay: 100,
      smooth: " easeOutQuad",
      // offset: 100,
    });
  };
  return (
    <div className="header">
      <div className="rectangle"></div>
      <div className="rectangle-other-side"></div>
      <div className="hello-texts-div">
        <h1 className="h1">{mappedhelloWordArr}</h1>
        <h2>
          my name is <span>Krzysiek</span> and I love to code
        </h2>
      </div>

      <div className="tags">
        <img className="open-tag" src={openTag} alt="close Tag" />
        <img className="close-tag" src={closeTag} alt="close Tag" />
      </div>
      <Clock className="clock" />

      <FontAwesomeIcon
        onClick={() => scrollToAboutMe()}
        className="double-down"
        icon={faAngleDoubleDown}
      />
      <Element>
        <img name="waves" className="waves" src={waves} alt="waves" />
      </Element>
    </div>
  );
};

export default Header;
