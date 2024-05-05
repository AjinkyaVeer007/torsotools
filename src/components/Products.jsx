import React from "react";
import { theme } from "../utils/constant";
import ProductCard from "./ProductCard";
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
      <div className="row g-0">
        {productData &&
          productData.map((product) => (
            <div key={product?.name} className="col-12 col-lg-4 p-3">
              <ProductCard data={product} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Products;
