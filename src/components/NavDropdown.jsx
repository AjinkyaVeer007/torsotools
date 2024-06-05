import React from "react";
import { theme } from "../utils/constant";
import companyLogo from "../assets/logo.png";
import {
  navExtraProducts,
  navProductList_bolting,
} from "../utils/data/navbar/navbarProductList";
import { useNavigate } from "react-router-dom";

function NavDropdown({ setShow }) {
  const navigate = useNavigate();

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="navDropdown justify-content-evenly p-4 rounded shadow"
    >
      <div className="px-4">
        <div
          style={{ color: theme.primary, fontSize: "16px" }}
          className="fw-medium mb-2"
        >
          Tube Tools
        </div>
        <div className="d-flex flex-column">
          {navProductList_bolting &&
            navProductList_bolting.map((navBoltingProd) => (
              <div
                key={navBoltingProd.id}
                onClick={() => {
                  setShow(false);
                  navigate(`/product-details/${navBoltingProd.id}`);
                }}
                className="navDropdownItem rounded"
              >
                {navBoltingProd.name}
              </div>
            ))}
        </div>
      </div>
      <div className="px-4">
        <div
          style={{ color: theme.primary, fontSize: "16px" }}
          className="fw-medium mb-2"
        >
          Other Products
        </div>
        <div className="d-flex flex-column">
          {navExtraProducts &&
            navExtraProducts.map((navExtraProd) => (
              <div
                key={navExtraProd.id}
                onClick={() => {
                  setShow(false);
                  navigate(`/product-details/${navExtraProd.id}`);
                }}
                className="navDropdownItem rounded"
              >
                {navExtraProd.name}
              </div>
            ))}
        </div>
      </div>
      <div>
        <img src={companyLogo} alt="logo" width={"100px"} />
      </div>
    </div>
  );
}

export default NavDropdown;
