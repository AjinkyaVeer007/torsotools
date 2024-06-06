import React, { useState } from "react";
import companyLogo from "../assets/logo.png";
import { theme } from "../utils/constant";
import NavDropdown from "./NavDropdown";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import SideMenu from "./SideMenu";

function CustomNavbar() {
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);

  const toggleSideMenu = () => setShowSideMenu(!showSideMenu);
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
        <div className="d-flex gap-3 align-items-center">
          <div
            style={{ backgroundColor: theme.primary }}
            className="px-3 py-1 text-white"
          >
            Get quote
          </div>
          <div className="d-flex d-lg-none">
            <IoMenu size={"30px"} onClick={toggleSideMenu} />
          </div>
          <SideMenu
            show={showSideMenu}
            handleClose={toggleSideMenu}
            setShow={setShowSideMenu}
          />
        </div>
      </div>
      <div
        style={{ backgroundColor: theme.dark, fontSize: "14px" }}
        className="d-none d-lg-flex justify-content-center align-items-center gap-5 text-white py-2 sticky-top"
      >
        <Nav.Link href="/#home">Home</Nav.Link>
        <div className="pointer">
          <div
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            Products ▾
          </div>
          {showDropdown && <NavDropdown setShow={setShowDropdown} />}
        </div>
        <Nav.Link href="/#industries">Industries</Nav.Link>
        <Nav.Link href="/#whyus">Why Us</Nav.Link>
        <div className="pointer">
          <Nav.Link href="/#certification">Certification</Nav.Link>
        </div>
      </div>
    </>
  );
}

export default CustomNavbar;
