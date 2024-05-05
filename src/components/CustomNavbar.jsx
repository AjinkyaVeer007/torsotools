import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import companyLogo from "../assets/logo.png";
import { theme } from "../utils/constant";

function CustomNavbar() {
  return (
    <Navbar
      expand="lg"
      className="px-4"
      style={{ backgroundColor: theme.light }}
      sticky="top"
    >
      <Navbar.Brand>
        <img src={companyLogo} alt="torsoTools" height={"50px"} />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ms-auto d-flex align-items-center gap-3">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Services</Nav.Link>
          <Nav.Link>Pages</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
          <div
            style={{ backgroundColor: theme.primary, color: theme.light }}
            className="px-3 py-2 pointer"
          >
            Get A Quote
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
