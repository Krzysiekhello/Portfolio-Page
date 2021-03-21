import React, { useState } from "react";

import "../Styles/Skills.css";
const mySkills = [
  "Html",
  "Css",
  "JS",
  "React",
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
  const [hasAnimationEnd, sethasAniamtionEnd] = useState(false);
  const isHeightOktoSlideDivsInto = heightOfScrollBar >= 1000 ? true : false;
  const one = () => {
    setHeightOfScrollBar(window.scrollY);
    if (isHeightOktoSlideDivsInto) {
      sethasAniamtionEnd(true);
    }
  };
  window.addEventListener("scroll", one);
  console.log(isHeightOktoSlideDivsInto);
  const mapped = mySkills.map((el, index) => {
    return (
      <li
        key={index}
        className={
          hasAnimationEnd
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
      <ul className="skills-container container">{mapped}</ul>
    </div>
  );
};

export default Skills;
