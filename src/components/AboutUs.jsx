import React from "react";
import { theme } from "../utils/constant";
import certificate1 from "../assets/certificate1.jpg";
import certificate2 from "../assets/certificate2.jpg";
import useAnimationProvider from "../utils/hooks/useAnimationProvider";

function AboutUs() {
  const [isAnimate, elementRef] = useAnimationProvider(0.1);
  return (
    <div
      id="certification"
      className="row g-0 px-4 m-5"
      style={{ paddingTop: "70px" }}
    >
      <div
        ref={elementRef}
        className={`col-12 col-lg-5 ${isAnimate && "animeLeftToRightFadeIn"}`}
      >
        <div className="fw-medium mb-2" style={{ color: theme.primary }}>
          ACHIEVEMENT
        </div>
        <div
          className="fw-bold mb-3"
          style={{ color: theme.dark, fontSize: "50px", lineHeight: "1.1" }}
        >
          Certificate We achieve
        </div>
        <div style={{ color: theme.secondary }}>
          We are proud to announce that our company has been awarded two
          prestigious certifications that underscore our commitment to quality
          and compliance. We have achieved the ISO 9001:2015 Certificate of
          Registration, demonstrating our adherence to international standards
          of quality management. Additionally, we have earned the Certificate of
          Compliance, reflecting our dedication to meeting rigorous regulatory
          requirements. These certifications are a testament to our unwavering
          dedication to excellence and our promise to deliver superior products
          and services to our valued customers.
        </div>
      </div>
      <div
        ref={elementRef}
        className={`col-12 col-lg-6 position-relative d-none d-lg-block ${
          isAnimate && "animeRightToLeftFadeIn"
        }`}
      >
        <img
          src={certificate1}
          alt="certificate 1"
          className="cerificate certificate1 rounded"
          style={{
            width: "300px",
            top: "0",
            left: "50px",
            position: "absolute",
          }}
        />
        <img
          src={certificate2}
          alt="certificate 1"
          className="cerificate certificate2 rounded"
          style={{
            width: "300px",
            right: "0px",
            top: "50px",
            position: "absolute",
          }}
        />
      </div>
    </div>
  );
}

export default AboutUs;
