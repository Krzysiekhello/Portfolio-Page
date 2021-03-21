import React, { useState } from "react";

import Buble from "./Buble";

import "../Styles/AboutMe.css";

const AboutMe = () => {
  const [heightOfScrollBar, setHeightOfScrollBar] = useState(null);

  const one = () => {
    setHeightOfScrollBar(window.scrollY);
  };

  const isHeightOktoSlideDivsInto = heightOfScrollBar >= 280 ? true : false;

  window.addEventListener("scroll", one);

  return (
    <>
      <div className="about-me-section">
        <figure className="text-center">
          <blockquote className="blockquote">
            <p>
              Whoever is passive and wonders knows his ignorance. Astonishment
              is the beginning of knowledge.
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">Arystoteles</figcaption>
        </figure>
        <div>
          <div className="description-rectangles container">
            <div
              className={
                isHeightOktoSlideDivsInto
                  ? "shadow p-3 mb-5 bg-body rounded first-div first-active"
                  : "shadow p-3 mb-5 bg-body rounded first-div "
              }
              style={{ marginRight: 20 }}
            >
              <h2>About</h2>
              <p>
                I live work and study near Kielce.I`m 22 and at my day job I`m
                graphic designer where I work mostly with photos and graphics
                which you can see on Allegro auctions or SmartMoto web shop.
                Meanwile i study Geodesy and cartograpy at Politechnika
                Świętokrzyska Polytechnic but I dont vibe with it as much as
                with code (thats why you are reading this).
              </p>
            </div>
            <div
              className={
                isHeightOktoSlideDivsInto
                  ? "shadow p-3 mb-5 bg-body rounded second-div second-active"
                  : "shadow p-3 mb-5 bg-body rounded second-div "
              }
            >
              <h2>Coding is like travel</h2>
              <p>
                I village into problem solving, creating websides. Each day with
                code if for me like a travel into place i never have been yet, I
                meet new problems then think about them,search and solve.
              </p>
            </div>
          </div>
          <div className=" description-rectangles container">
            <div
              className={
                isHeightOktoSlideDivsInto
                  ? "shadow p-3 mb-5 bg-body rounded third-div third-active"
                  : "shadow p-3 mb-5 bg-body rounded third-div "
              }
              style={{ marginRight: 20 }}
            >
              <h2>Challange me</h2>
              <p>
                I love challenging myself, keep learning and do intresting
                things. Except coding I am making instrumnetal/beats, writitng
                scenarios for my friends music videos and cooking. I really like
                to see effects when I am doing something and because of this
                coding and music for me is really similar except that code I can
                see but music I can hear.
              </p>
            </div>
            <div
              className={
                isHeightOktoSlideDivsInto
                  ? "shadow p-3 mb-5 bg-body rounded fourth-div fourth-active"
                  : "shadow p-3 mb-5 bg-body rounded fourth-div "
              }
            >
              <h2>Main Goal for this moment</h2>
              <span>
                My maing goal right now is to find job which will give me chance
                to grow to be better and better develper.
              </span>
            </div>
          </div>
        </div>
        <Buble />
      </div>
    </>
  );
};

export default AboutMe;
