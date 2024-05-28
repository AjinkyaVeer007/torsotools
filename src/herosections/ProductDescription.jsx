import React, { useEffect, useState } from "react";
import { productData, theme } from "../utils/constant";
import ProductDescriptionCard from "../components/ProductDescriptionCard";

function ProductDescription() {
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    setProductDetails(productData["Tube-Expanders-And-Rolling-Controls"]);
  }, []);
  return (
    <>
      {productDetails && (
        <div className="p-4">
          <div
            className="fw-medium"
            style={{ color: theme.dark, fontSize: "30px" }}
          >
            {productDetails?.title}
          </div>
          <p style={{ color: theme.secondary }}>{productDetails?.detail}</p>
          {productDetails &&
            productDetails?.types?.map((prod) => {
              return (
                <div
                  key={prod?.title}
                  className="p-4 m-4 rounded productDescriptionContainer"
                  style={{ backgroundColor: theme.light }}
                >
                  <div>
                    <div
                      style={{ color: theme.primary, fontSize: "20px" }}
                      className="fw-medium mb-2"
                    >
                      {prod?.title}
                    </div>
                    <p
                      className="mb-3"
                      style={{ fontSize: "14px", color: theme.secondary }}
                    >
                      {prod?.detail}
                    </p>
                  </div>
                  <div className="row g-3">
                    {prod?.products &&
                      prod?.products?.map((prodCardData) => (
                        <div key={prodCardData?.name} className="col-6">
                          <ProductDescriptionCard data={prodCardData} />
                        </div>
                      ))}
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}

export default ProductDescription;
