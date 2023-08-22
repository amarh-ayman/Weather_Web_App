import React, { useState } from "react";
import { useWeatherContext } from "./WeatherContext";
import svgImage from "../assets/bars-solid.svg";
import cancelImage from "../assets/xmark-solid.svg";
const countries = [
  "Jordan",
  "Qatar",
  "Egypt",
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "Japan",
  "Australia",
  "China",
];

function SideBar() {
  const { setLocation } = useWeatherContext();
  const [showCountriesList, setShowCountriesList] = useState(false);

  const toggleCountriesList = () => {
    // console.log("clicked");
    setShowCountriesList(!showCountriesList);
  };
  return (
    <div className={`sidebar ${showCountriesList ? "open" : ""}`}>
      <img
        src={showCountriesList ? cancelImage : svgImage}
        alt=""
        onClick={toggleCountriesList}
      />
      <div
        className={`glass-overlay countries-list ${
          showCountriesList ? "visible" : ""
        }`}
      >
        {countries.map((item) => (
          <p key={item} onClick={() => setLocation(item)}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
