import React from "react";
import Intro from "../components/Intro";
import Statistics from "../components/Statistics";
import IndustriesServe from "../components/IndustriesServe";
import WhyUs from "../components/WhyUs";
import Products from "../components/Products";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function LandingPage() {
  return (
    <>
      <Intro />
      <IndustriesServe />
      <WhyUs />
      <Statistics />
      <AboutUs />
      <Products />
      <Footer />
    </>
  );
}

export default LandingPage;
