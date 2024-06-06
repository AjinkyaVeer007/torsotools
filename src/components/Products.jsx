import React from "react";
import { theme } from "../utils/constant";
import tool1 from "../assets/tool1.png";
import tool2 from "../assets/tool2.png";
import tool3 from "../assets/tool3.png";
import tool4 from "../assets/tool4.png";
import tool5 from "../assets/tool5.png";
import tool6 from "../assets/tool6.png";

function Products() {
  const productData = [
    {
      img: tool1,
      name: "Tube Tools",
    },
    {
      img: tool2,
      name: "Bolting Tools",
    },
    {
      img: tool3,
      name: "Pipe Bevellers",
    },
    {
      img: tool4,
      name: "Split Frame Cold Cutting Machine",
    },
    {
      img: tool5,
      name: "Flange Facer",
    },
    {
      img: tool6,
      name: "Tube Cleaners",
    },
  ];
  return (
    <div className="text-center p-4 my-5">
      <div
        className="fw-bold mb-3"
        style={{ color: theme.dark, fontSize: "50px", lineHeight: "1.1" }}
      >
        Our Products
      </div>
      <div className="fw-medium mb-2" style={{ color: theme.primary }}>
        We delivered our product to the companies present in more than 60
        countries across the world
      </div>
      <div className="productGridContainer mx-2 mx-lg-5 px-0 px-lg-5 mt-3">
        <div className="product1 productCard border">
          <div
            className="productImg gridImage1"
            style={{
              backgroundImage: `url(${tool1})`,
            }}
          ></div>
          <div className="productName">Tube Tools</div>
        </div>
        <div className="product2 productCard border">
          <div
            className="productImg gridImage2"
            style={{
              backgroundImage: `url(${tool2})`,
            }}
          ></div>
          <div className="productName">Bolting Tools</div>
        </div>
        <div className="product3 productCard border">
          <div
            className="productImg gridImage1"
            style={{
              backgroundImage: `url(${tool3})`,
            }}
          ></div>
          <div className="productName">Pipe Bevellers</div>
        </div>
        <div className="product4 productCard border">
          <div
            className="productImg gridImage2"
            style={{
              backgroundImage: `url(${tool4})`,
            }}
          ></div>
          <div className="productName">Split Frame Cold Cutting Machine</div>
        </div>
        <div className="product5 productCard border">
          <div
            className="productImg gridImage2"
            style={{
              backgroundImage: `url(${tool5})`,
            }}
          ></div>
          <div className="productName">Flange Facer</div>
        </div>
        <div className="product6 productCard border">
          <div
            className="productImg gridImage1"
            style={{
              backgroundImage: `url(${tool6})`,
            }}
          ></div>
          <div className="productName">Tube Cleaners</div>
        </div>
      </div>
    </div>
  );
}

export default Products;
