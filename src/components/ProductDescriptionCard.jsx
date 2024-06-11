import React from "react";
import { theme } from "../utils/constant";
import { useNavigate } from "react-router-dom";

function ProductDescriptionCard({ data, delay }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(data?.navigate)}
      style={{ animationDelay: `${delay * 100}ms` }}
      className="bg-white productDescriptionCard animeBottomToTopCard"
    >
      <div className="p-3">
        <div
          style={{
            height: "200px",
            width: "100%",
            backgroundImage: `url(${data?.image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>
        <div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescriptionCard;
