import React from "react";
import { theme } from "../utils/constant";
import certificate1 from "../assets/certificate1.jpg";
import certificate2 from "../assets/certificate2.jpg";

function AboutUs() {
  return (
    <div className="row g-0 p-4 my-5">
      <div className="col-12 col-lg-6 position-relative d-none d-lg-block">
        <img
          src={certificate1}
          alt="certificate 1"
          className="shadow"
          style={{
            width: "250px",
            top: "0",
            left: "50px",
            position: "absolute",
          }}
        />
        <img
          src={certificate2}
          alt="certificate 1"
          className="shadow"
          style={{
            width: "250px",
            right: "50px",
            bottom: "0",
            position: "absolute",
          }}
        />
      </div>
      <div className="col-12 col-lg-5">
        <div className="fw-medium mb-2" style={{ color: theme.primary }}>
          ABOUT US
        </div>
        <div
          className="fw-bold mb-3"
          style={{ color: theme.dark, fontSize: "50px", lineHeight: "1.1" }}
        >
          We Are Leader In Industrial Market
        </div>
        <div style={{ color: theme.secondary }}>
          Torso Tools Pvt Ltd is a company formed by professionals with 10 years
          of experience in delivering best-quality Boilers, Heat Exchanger
          Maintenance anf pipe line maintenance tools consists of Tube Expander,
          Tube Rolling Controls, Tube bevelling machines, Tube Pulling, Tube
          Cleaning tools, Hydraulic Torque Wrench, Hydraulic Bolt Tensioners,
          Portable Pipe Cutting Machines, Flange Facers and a wide range of
          other flange management tools and accessories. We trive to constantly
          innovate new ways to design and manufacture best quality tools to our
          clients all over the world. Torso Tools works with all tops courier
          and freight companies directly which enables us to deliver our product
          to the companies present in more than 60 countries across the world.
        </div>
        <div className="d-flex mt-3">
          <div
            className="px-3 py-2"
            style={{ backgroundColor: theme.primary, color: theme.light }}
          >
            Know More
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
