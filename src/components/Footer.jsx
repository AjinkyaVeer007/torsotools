import React from "react";
import { theme } from "../utils/constant";
import torsoLogo from "../assets/logo.png";
import { MdEmail, MdHome, MdPhone } from "react-icons/md";

function Footer() {
  return (
    <div style={{ backgroundColor: theme.dark }}>
      <div className="row g-0 p-2 p-lg-5 mx-1 mx-lg-5">
        <div className="col-12 col-lg-5 px-3 mb-3">
          <img src={torsoLogo} alt="logo" width={"100px"} />
          <div className="mt-3" style={{ color: theme.light }}>
            Experience in delivering best-quality Boilers, Heat Exchanger
            Maintenance and pipeline maintenance tools consists of Tube
            Expander, Tube Rolling Controls, Tube beveling machines and a wide
            range of other flange management tools and accessories. We thrive to
            constantly innovate new ways to design and manufacture best quality
            tools to our clients all over the world.
          </div>
        </div>
        <div
          className="col-12 col-lg-3 px-3 mb-3"
          style={{ color: theme.light }}
        >
          <div style={{ color: theme.primary }} className="fw-medium mb-2">
            MORE INFORMATION
          </div>
          <li>About</li>
          <li>Products</li>
          <li>Contact Us</li>
          <div style={{ color: theme.primary }} className="fw-medium my-2">
            BECOME OUR DISTRIBUTER
          </div>
          <div>
            Click here and fill the form, you’ll be contacted by our office
          </div>
          <div className="d-flex my-3">
            <div
              style={{ backgroundColor: theme.primary }}
              className="py-2 px-3"
            >
              Become A Distributer
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 px-3 mb-3">
          <div style={{ color: theme.primary }} className="fw-medium mb-2">
            CONTACT US
          </div>
          <div className="d-flex gap-3 align-items-start mb-2">
            <div>
              <MdHome size={"25px"} color={theme.primary} />
            </div>
            <div style={{ color: theme.light }}>
              Rtc-57, Sector 8, MIDC Industrial Area, Rabale, Navi Mumbai,
              Maharashtra 400701
            </div>
          </div>
          <div className="d-flex gap-3 align-items-start mb-2">
            <div>
              <MdPhone size={"25px"} color={theme.primary} />
            </div>
            <div style={{ color: theme.light }}>Phone : +91 8976674767</div>
          </div>
          <div className="d-flex gap-3 align-items-start mb-2">
            <div>
              <MdEmail size={"25px"} color={theme.primary} />
            </div>
            <div style={{ color: theme.light }}>
              Email : rahul@torsotools.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
