import React from "react";
import { theme } from "../utils/constant";
import IndustryCard from "./IndustryCard";
import industry1 from "../assets/industry1.jpg";
import industry2 from "../assets/industry2.jpg";
import industry3 from "../assets/industry3.jpg";
import industry4 from "../assets/industry4.jpg";
import useAnimationProvider from "../utils/hooks/useAnimationProvider";

function IndustriesServe() {
  const [isAnimate, elementRef] = useAnimationProvider(0.1);

  const industryData = [
    {
      image: industry1,
      name: "Oil & Gas",
    },
    {
      image: industry2,
      name: "Power Plants",
    },
    {
      image: industry3,
      name: "Fertilizer",
    },
    {
      image: industry4,
      name: "Construction",
    },
  ];

  return (
    <div
      id="industries"
      className="text-center px-4 my-4"
      style={{ paddingTop: "50px" }}
    >
      <div
        className="fw-bold mb-3"
        style={{ color: theme.dark, fontSize: "50px", lineHeight: "1.1" }}
      >
        INDUSTRIES, WE SERVE
      </div>
      <div
        className="fw-medium mb-2 animeTopToBottom"
        style={{ color: theme.primary }}
      >
        THEIR SUCCESS, OUR SUCCESS.
      </div>
      <div style={{ color: theme.secondary }}>
        We’re proud to be helping our customer’s work faster, smarter and be
        more responsive – across all kinds of industries and business. We helped
        our customers achieve their goals, stay on the leading-edge of
        innovation, and as a result become more profitable.
      </div>{" "}
      <div className="row g-0 justify-content-center mt-4">
        {industryData &&
          industryData.map((industry) => (
            <div
              key={industry.name}
              ref={elementRef}
              className={`col-12 col-lg-3 mb-3 px-3 ${
                isAnimate && "animeBottomToTopFadeIn"
              }`}
            >
              <IndustryCard data={industry} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default IndustriesServe;
