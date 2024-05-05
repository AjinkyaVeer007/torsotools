import React from "react";
import { theme } from "../utils/constant";
import featureImg from "../assets/feature.jpg";
import { FaCircleCheck } from "react-icons/fa6";

function WhyUs() {
  return (
    <div className="row g-0 p-4 my-5 align-items-center">
      <div className="col-12 col-lg-6 text-center order-2 order-lg-0">
        <img src={featureImg} alt="img" width={"70%"} />
      </div>
      <div className="col-12 col-lg-5">
        <div className="fw-medium mb-2" style={{ color: theme.primary }}>
          WHY CHOOSING US!
        </div>
        <div
          className="fw-bold mb-3"
          style={{ color: theme.dark, fontSize: "50px", lineHeight: "1.1" }}
        >
          Few Reasons Why People Choosing Us!
        </div>
        <div>
          <div className="d-flex align-items-start gap-3">
            <div>
              <FaCircleCheck color={theme.primary} size={"30px"} />
            </div>
            <div>
              <div style={{ color: theme.dark }} className="fw-medium h5">
                Experienced Workers
              </div>
              <p className="ps-2" style={{ color: theme.secondary }}>
                Our team comprises seasoned professionals with decades of
                hands-on experience in the oil and gas industry. We bring
                unparalleled expertise to every project, ensuring efficiency and
                safety at every step.
              </p>
            </div>
          </div>

          <div className="d-flex align-items-start gap-3">
            <div>
              <FaCircleCheck color={theme.primary} size={"30px"} />
            </div>
            <div>
              <div style={{ color: theme.dark }} className="fw-medium h5">
                Reliable Industrial Services
              </div>
              <p className="ps-2" style={{ color: theme.secondary }}>
                Count on us for dependable industrial services tailored to meet
                your specific needs. Our commitment to quality and safety
                guarantees that your operations run smoothly and effectively.
              </p>
            </div>
          </div>
          <div className="d-flex align-items-start gap-3">
            <div>
              <FaCircleCheck color={theme.primary} size={"30px"} />
            </div>
            <div>
              <div style={{ color: theme.dark }} className="fw-medium h5">
                24/7 Customer Support
              </div>
              <p className="ps-2" style={{ color: theme.secondary }}>
                We pride ourselves on providing round-the-clock customer support
                to address any inquiries or emergencies. Your satisfaction and
                peace of mind are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
