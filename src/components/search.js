import React, { useState } from "react";
import { useWeatherContext } from "./WeatherContext";

function Search() {
  const { setLocation } = useWeatherContext();
  const [country, setCountry] = useState("");

  const searchLocationOnChange = (event) => {
    setCountry(event.target.value);
  };
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      setLocation(event.target.value);
      setCountry("");
    }
  };

  return (
    <div className="search">
      <input
        value={country}
        onChange={searchLocationOnChange}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"
      />
    </div>
  );
}

export default Search;
