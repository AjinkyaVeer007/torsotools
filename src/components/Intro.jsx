import React from "react";
import introImage from "../assets/test.jpg";
import { theme } from "../utils/constant";

function Intro() {
  return (
    <div>
      {/* <video width={"100%"} autoPlay>
        <source src="src/assets/intro_torso.mp4" type="video/mp4" />
      </video> */}
      <div
        className="position-relative"
        style={{
          backgroundImage: `url(${introImage})`,
          width: "100%",
          height: "90vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="position-absolute"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, transparent 100%)",
          }}
        ></div>
        <div
          className="ms-5"
          style={{
            color: theme.light,
            position: "absolute",
            top: "50%",
            fontSize: "70px",
            fontWeight: "bold",
            transform: "translateY(-50%)",
          }}
        >
          The Best Reliable <br />
          Industry Solution
        </div>
      </div>
    </div>
  );
}

export default Intro;
