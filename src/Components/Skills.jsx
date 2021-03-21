import React, { useState } from "react";

import "../Styles/Skills.css";
const mySkills = [
  "Html",
  "Css",
  "JS",
  "Node",
  "Express",
  "SASS",
  "Bootstrap",
  "Material UI",
  "GitHub",
  "Photoshop",
  "Alghoritms",
];
const Skills = () => {
  const [heightOfScrollBar, setHeightOfScrollBar] = useState(null);

  const one = () => {
    setHeightOfScrollBar(window.scrollY);
  };

  const isHeightOktoSlideDivsInto = heightOfScrollBar >= 1000 ? true : false;

  window.addEventListener("scroll", one);
  console.log(isHeightOktoSlideDivsInto);
  const mapped = mySkills.map((el, index) => {
    return (
      <li
        key={index}
        className={
          isHeightOktoSlideDivsInto
            ? `skill-number-${index} all-skills shadow p-3 skill-number-${index}-active`
            : `skill-number-${index} all-skills shadow p-3`
        }
      >
        {el}
      </li>
    );
  });
  return (
    <div className="skills-section" name="skills-section">
      <h2 className="title">Skills</h2>
      <ul className="skills-div container">{mapped}</ul>
    </div>
  );
};

export default Skills;
