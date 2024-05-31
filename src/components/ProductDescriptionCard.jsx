import React from "react";
import { theme } from "../utils/constant";

function ProductDescriptionCard({ data }) {
  return (
    <div className="bg-white border border-white productDescriptionCard">
      <div className="row p-3">
        <div className="col-4">
          <div
            style={{
              height: "180px",
              width: "180px",
              backgroundImage: `url(${data?.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
        </div>
        <div className="col-8">
          <div className="d-flex flex-column h-100 pt-2">
            <div
              className="fw-medium"
              style={{
                color: theme.dark,
                fontSize: "15px",
                fontStyle: "italic",
              }}
            >
              {data?.name}
            </div>
            <div style={{ fontSize: "13px", color: theme.secondary }}>
              {data?.detail}
            </div>
            <div className="d-flex mt-2">
              <div
                className="px-2 py-1 mb-2 text-white pointer"
                style={{ backgroundColor: theme.primary, fontSize: "13px" }}
              >
                Know More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescriptionCard;
