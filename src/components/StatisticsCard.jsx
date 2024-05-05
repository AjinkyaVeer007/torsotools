import React from "react";
import { theme } from "../utils/constant";

function StatisticsCard({ icon, count, name }) {
  return (
    <div className="border border-secondary rounded text-white text-center">
      <div className="mt-4">{icon}</div>
      <div
        className="fw-bold mb-2"
        style={{ fontSize: "60px", color: theme.primary }}
      >
        {count}
      </div>
      <div className="mb-5 h5">{name}</div>
    </div>
  );
}

export default StatisticsCard;
