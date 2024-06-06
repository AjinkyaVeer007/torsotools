import React, { useEffect } from "react";
import { Offcanvas } from "react-bootstrap";
import companyLogo from "../assets/logo.png";
import { theme } from "../utils/constant";
import {
  navExtraProducts,
  navProductList_bolting,
} from "../utils/data/navbar/navbarProductList";
import { useNavigate } from "react-router-dom";

function SideMenu({ show, handleClose, setShow }) {
  const navigate = useNavigate();
  useEffect(() => {
    // return () => setShow(false);
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
        <div
          className="d-flex flex-column align-items-start ms-4 gap-3"
          style={{ fontSize: "18px", color: theme.dark }}
        >
          <div
            className="fw-medium"
            onClick={() => {
              navigate("/");
              setShow(false);
            }}
          >
            Home
          </div>
          <div>
            <div className="fw-medium">Products</div>
            <div>
              {navProductList_bolting &&
                navProductList_bolting.map((navBoltingProd) => (
                  <li
                    key={navBoltingProd.id}
                    onClick={() => {
                      setShow(false);
                      navigate(`/product-details/${navBoltingProd.id}`);
                    }}
                    className="navDropdownItem rounded"
                  >
                    {navBoltingProd.name}
                  </li>
                ))}
              {navExtraProducts &&
                navExtraProducts.map((navExtraProd) => (
                  <li
                    key={navExtraProd.id}
                    onClick={() => {
                      setShow(false);
                      navigate(`/product-details/${navExtraProd.id}`);
                    }}
                    className="navDropdownItem rounded"
                  >
                    {navExtraProd.name}
                  </li>
                ))}
            </div>
          </div>
          <div className="fw-medium">Get Quote</div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default SideMenu;
