import React from "react";
import { theme } from "../utils/constant";

function IndustryCard({ data }) {
  return (
    <div
      className="industryCard"
      style={{
        width: "300px",
        height: "480px",
        backgroundImage: `url(${data?.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
        margin: "auto",
      }}
    >
      <div
        className="industryShadow"
        style={{
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(0deg, rgba(2,0,36,1) 0%, transparent 100%)",
        }}
      >
        <div
          className="fw-medium h5"
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%)",
            color: theme.light,
          }}
        >
          {data?.name}
        </div>
      </div>
    </div>
  );
}

export default IndustryCard;
