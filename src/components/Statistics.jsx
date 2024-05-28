import React from "react";
import { theme } from "../utils/constant";
import StatisticsCard from "./StatisticsCard";
import { FaStar, FaUsers } from "react-icons/fa";
import { PiUsersFourFill } from "react-icons/pi";
import { SiGoogletasks } from "react-icons/si";
import { useNavigate } from "react-router-dom";

function Statistics() {
  const navigate = useNavigate();

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
      <div className="text-center">
        <div style={{ color: theme.primary }} className="fw-medium">
          ABOUT US
        </div>
        <div className="text-white fw-bold h1">
          We Are Leader In Industrial Market
        </div>
      </div>
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
      <div className="px-5 py-3">
        <div style={{ color: theme.primary }} className="mb-2 fw-medium">
          Our vision
        </div>
        <div className="text-white">
          We trive to constantly innovate new ways to design and manufacture
          best quality tools to our clients all over the world. Torso Tools
          works with all tops courier and freight companies directly which
          enables us to deliver our product to the companies present in more
          than 60 countries across the world.
        </div>
      </div>
    </div>
  );
}

export default Statistics;
