import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmileWink } from "@fortawesome/free-solid-svg-icons";

import "../Styles/Portfolio.css";
const Portfolio = () => {
  return (
    <div className="portfolio" name="portfolio-section" id="portfolio">
      <h2>Projects</h2>
      <div className="carousel-div shadow">
        <div
          id="carouselExampleCaptions"
          className="carousel slide shadow"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <FontAwesomeIcon className="wink-icon" icon={faSmileWink} />
            <div className="carousel-item active carousel-photos">
              <img
                src="https://placebear.com/640/360"
                className="d-block w-100"
                alt="movie-searcher"
              />
              <div className="carousel-div-buttons">
                <div>
                  <button>View Project</button>
                  <button>View Code</button>
                </div>
              </div>

              <div className="carousel-caption d-none d-md-block">
                <h5>Movies</h5>
                <p>Hover me for project and code</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.stevensegallery.com/640/360"
                className="d-block w-100"
                alt="quiz"
              />
              <div className="carousel-div-buttons">
                <div>
                  <button>View Project</button>
                  <button>View Code</button>
                </div>
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h5>Quiz</h5>
                <p>Hover me for project and code</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="http://placeimg.com/640/360/any"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-div-buttons">
                <div>
                  <button>View Project</button>
                  <button>View Code</button>
                </div>
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Hover me for project and code</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
