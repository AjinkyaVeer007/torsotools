import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <CustomNavbar />
      <Outlet />
    </>
  );
}

export default Layout;
