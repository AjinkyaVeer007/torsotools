import React from "react";
import { theme } from "../utils/constant";
import companyLogo from "../assets/logo.png";

function NavDropdown() {
  return (
    <div className="navDropdown justify-content-evenly p-4 rounded shadow">
      <div className="px-4">
        <div
          style={{ color: theme.primary, fontSize: "16px" }}
          className="fw-medium mb-2"
        >
          Products
        </div>
        <div className="d-flex flex-column">
          <div className="navDropdownItem rounded">Tube Tools</div>
          <div className="navDropdownItem rounded">Bolting Tools</div>
          <div className="navDropdownItem rounded">Pipe Bevellers</div>
          <div className="navDropdownItem rounded">
            Split Frame Cold Cutting Machine
          </div>
          <div className="navDropdownItem rounded">Flange Facer</div>
          <div className="navDropdownItem rounded">Tube Cleaners</div>
        </div>
      </div>
      <div className="px-4">
        <div
          style={{ color: theme.primary, fontSize: "16px" }}
          className="fw-medium mb-2"
        >
          Catalogs
        </div>
        <div className="d-flex flex-column">
          <div className="navDropdownItem rounded">Tube Tools</div>
          <div className="navDropdownItem rounded">
            Tube Bevelling & Facing Machine
          </div>
          <div className="navDropdownItem rounded">
            Bolting & Machining Solutions
          </div>
          <div className="navDropdownItem rounded">
            Cold Cutting & Bevelling Machines
          </div>
        </div>
      </div>
      <div className="px-4">
        <div
          style={{ color: theme.primary, fontSize: "16px" }}
          className="fw-medium mb-2"
        >
          Catalogs
        </div>
        <div className="d-flex flex-column">
          <div className="navDropdownItem rounded">Tube Tools</div>
          <div className="navDropdownItem rounded">
            Tube Bevelling & Facing Machine
          </div>
          <div className="navDropdownItem rounded">
            Bolting & Machining Solutions
          </div>
          <div className="navDropdownItem rounded">
            Cold Cutting & Bevelling Machines
          </div>
        </div>
      </div>
      <div>
        <img src={companyLogo} alt="logo" width={"100px"} />
      </div>
    </div>
  );
}

export default NavDropdown;
