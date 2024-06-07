import React from "react";
import { theme } from "../utils/constant";
import carousel1 from "../assets/Innovation.gif";
import carouselBg from "../assets/carouselBg.png";

function Intro() {
  return (
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
            <span style={{ color: theme.primary }}>Industry Solution</span>
          </div>
        </div>
        <div className="col-12 col-lg-6 text-center animeLeftToRightFadeIn">
          <img src={carousel1} alt="img" width={"70%"} />
        </div>
      </div>
    </div>
  );
}

export default Intro;
