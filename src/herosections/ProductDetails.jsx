import React, { useEffect, useState } from "react";
import prodImg from "../assets/tool1.png";
import { theme } from "../utils/constant";
import { useParams } from "react-router-dom";
import { productInfo } from "../utils/data/productDetails/productData";

function ProductDetails() {
  const params = useParams();

  const [productData, setProductData] = useState(null);

  useEffect(() => {
    setProductData(productInfo[params?.prodId]);
  }, []);
  return (
    <div className="row g-0 mt-5 justify-content-center">
      {productData ? (
        <>
          <div className="col-lg-6 col-12 mb-5 mb-lg-0 animeLeftToRightFadeIn">
            <img
              src={productData?.image}
              alt="img"
              width={"100%"}
              height={"400px"}
              style={{
                objectFit: "contain",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
          <div className="col-lg-5 col-10 mb-5 mb-lg-0 animeRightToLeftFadeIn">
            {productData?.features?.length ? (
              <div>
                <div
                  style={{ color: theme.primary }}
                  className="fw-medium productHeadingUnderline"
                >
                  Features of {productData?.name}
                </div>
                <div
                  className="ms-3 mb-4"
                  style={{ fontSize: "13px", color: theme.secondary }}
                >
                  {productData?.features.map((feature) => {
                    return <li key={feature}>{feature}</li>;
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
            {productData?.technicalDetails?.length ? (
              <div>
                <div
                  style={{ color: theme.primary }}
                  className="fw-medium productHeadingUnderline"
                >
                  Technical Details
                </div>
                <div className="mb-4 ms-3" style={{ fontSize: "13px" }}>
                  <table className="table table-sm table-bordered">
                    <tbody>
                      {productData?.technicalDetails.map((info) => {
                        return (
                          <tr key={info?.th}>
                            <th className="technicalDetailsTableHeading">
                              {info?.th}
                            </th>
                            <td>{info?.td}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              ""
            )}
            {productData?.is3dDrawingAvailable &&
            productData?.isCatalogAvailable ? (
              <>
                <div
                  style={{ color: theme.primary }}
                  className="fw-medium productHeadingUnderline"
                >
                  Design and Catalog
                </div>
                <div className="d-flex gap-3 ms-3">
                  {productData?.is3dDrawingAvailable && (
                    <div className="customButton dark">3D Drawing</div>
                  )}
                  {productData?.isCatalogAvailable && (
                    <div className="customButton dark">Catalog</div>
                  )}
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        <div className="fw-medium h5 text-center w-100">
          Information not available
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
