import React, { useEffect, useState } from "react";
import { theme } from "../utils/constant";
import ProductDescriptionCard from "../components/ProductDescriptionCard";
import { useParams } from "react-router-dom";
import { productData } from "../utils/data/productDetails/productData";

function ProductDescription() {
  const params = useParams();

  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    setProductDetails(productData[params?.prodId]);
  }, [params]);
  return (
    <>
      {productDetails && (
        <div className="p-lg-4 p-0">
          {productDetails && (
            <div
              key={productDetails?.title}
              className="p-4 m-4 rounded productDescriptionContainer"
              style={{ backgroundColor: theme.light }}
            >
              <div>
                <div
                  style={{ color: theme.primary, fontSize: "20px" }}
                  className="fw-medium mb-2"
                >
                  {productDetails?.title}
                </div>
                <p
                  className="mb-3"
                  style={{ fontSize: "14px", color: theme.secondary }}
                >
                  {productDetails?.detail}
                </p>
              </div>
              <div className="row g-3">
                {productDetails?.products &&
                  productDetails?.products?.map((prodCardData) => (
                    <div key={prodCardData?.id} className="col-lg-4 col-12">
                      <ProductDescriptionCard data={prodCardData} />
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default ProductDescription;
