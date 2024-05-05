import React from "react";
import toolImg from "../assets/tool2.png";
import { theme } from "../utils/constant";

function ProductCard({ data }) {
  return (
    <div
      style={{
        borderTopLeftRadius: "30%",
        borderBottomRightRadius: "30%",
      }}
      className="shadow border productCard overflow-hidden"
    >
      <div
        className="productImg"
        style={{
          width: "100%",
          height: "350px",
          backgroundImage: `url(${data?.img})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          margin: "auto",
        }}
      ></div>
      <div
        style={{ backgroundColor: theme.primary, color: theme.light }}
        className="text-center py-2 fw-medium h6"
      >
        {data?.name}
      </div>
    </div>
  );
}

export default ProductCard;
