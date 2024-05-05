import React from "react";
import { theme } from "../utils/constant";
import StatisticsCard from "./StatisticsCard";
import { FaStar, FaUsers } from "react-icons/fa";
import { PiUsersFourFill } from "react-icons/pi";
import { SiGoogletasks } from "react-icons/si";

function Statistics() {
  const data = [
    {
      icon: <FaStar size={"40px"} />,
      count: "10",
      name: "Years Experience",
    },
    {
      icon: <PiUsersFourFill size={"40px"} />,
      count: "20",
      name: "Team Members",
    },
    {
      icon: <FaUsers size={"40px"} />,
      count: "99",
      name: "Happy Clients",
    },
    {
      icon: <SiGoogletasks size={"40px"} />,
      count: "120",
      name: "Projects Done",
    },
  ];
  return (
    <div
      className="row py-4 g-0"
      style={{
        backgroundColor: theme.dark,
      }}
    >
      {data &&
        data.map((state) => (
          <div key={state.name} className="col-12 col-lg-3 p-4">
            <StatisticsCard
              count={state.count}
              icon={state.icon}
              name={state.name}
            />
          </div>
        ))}
    </div>
  );
}

export default Statistics;
