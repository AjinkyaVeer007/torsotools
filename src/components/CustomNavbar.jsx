import React from "react";
import companyLogo from "../assets/logo.png";
import { theme } from "../utils/constant";
import NavDropdown from "./NavDropdown";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CustomNavbar() {
  const navigate = useNavigate();
  return (
    <>
      <div
        id="home"
        className="py-2 px-4 d-flex justify-content-between align-items-center"
        style={{ backgroundColor: theme.light }}
      >
        <img
          onClick={() => navigate("/")}
          src={companyLogo}
          style={{ height: "60px" }}
          alt="logo"
        />
        <div
          style={{ backgroundColor: theme.primary }}
          className="px-3 py-1 text-white"
        >
          Get quote
        </div>
      </div>
      <div
        style={{ backgroundColor: theme.dark, fontSize: "14px" }}
        className="d-flex justify-content-center align-items-center gap-5 text-white py-2 sticky-top"
      >
        <Nav.Link href="#home">Home</Nav.Link>
        <div className="pointer">
          <div className="navDropdownLink">Products ▾</div>
          <NavDropdown />
        </div>
        <Nav.Link href="#industries">Industries</Nav.Link>
        <Nav.Link href="#whyus">Why Us</Nav.Link>
        <div className="pointer">
          <Nav.Link href="#certification">Certification</Nav.Link>
        </div>
      </div>
    </>
  );
}

export default CustomNavbar;
