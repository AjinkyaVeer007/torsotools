import React, { useEffect } from "react";
import { Offcanvas } from "react-bootstrap";
import companyLogo from "../assets/logo.png";

function SideMenu({ show, handleClose, setShow }) {
  useEffect(() => {
    return () => setShow(false);
  }, []);
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <img
            onClick={() => navigate("/")}
            src={companyLogo}
            style={{ height: "60px" }}
            alt="logo"
          />
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default SideMenu;
