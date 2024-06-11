import React from "react";
import { theme } from "../utils/constant";
import carousel1 from "../assets/Innovation.gif";
import carousel2 from "../assets/Destination.gif";
import carousel3 from "../assets/Electrician.gif";
import carouselBg from "../assets/carouselBg.png";
import { Carousel } from "react-bootstrap";

function Intro() {
  return (
    <>
      <Carousel pause={false}>
        <Carousel.Item interval={1500}>
          <div
            style={{
              height: "83vh",
              backgroundImage: `url(${carouselBg})`,
            }}
          >
            <div className="row align-items-center g-0 h-100">
              <div className="col-12 col-lg-6 text-center animeRightToLeftFadeIn">
                <div
                  className="introTitle"
                  style={{
                    color: theme.dark,
                  }}
                >
                  The Best Reliable <br />
                  <span style={{ color: theme.primary }}>
                    Industry Solution
                  </span>
                </div>
              </div>
              <div className="col-12 col-lg-6 text-center animeLeftToRightFadeIn">
                <img src={carousel1} alt="img" width={"70%"} />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div
            style={{
              height: "83vh",
              backgroundImage: `url(${carouselBg})`,
            }}
          >
            <div className="row align-items-center g-0 h-100">
              <div className="col-12 col-lg-5 text-center animeRightToLeftFadeIn">
                <img src={carousel2} alt="img" width={"80%"} />
              </div>
              <div className="col-12 col-lg-7 text-center animeLeftToRightFadeIn">
                <div
                  className="introTitle"
                  style={{
                    color: theme.dark,
                  }}
                >
                  Available Worldwide, <br />
                  <span style={{ color: theme.primary }}>
                    Anytime, Anywhere
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div
            style={{
              height: "83vh",
              backgroundImage: `url(${carouselBg})`,
            }}
          >
            <div className="row align-items-center g-0 h-100">
              <div className="col-12 col-lg-6 text-center animeRightToLeftFadeIn">
                <div
                  className="introTitle"
                  style={{
                    color: theme.dark,
                  }}
                >
                  Quality Assured by
                  <br />
                  <span style={{ color: theme.primary }}>
                    Our Expert Engineers
                  </span>
                </div>
              </div>
              <div className="col-12 col-lg-6 text-center animeLeftToRightFadeIn">
                <img src={carousel3} alt="img" width={"80%"} />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Intro;
