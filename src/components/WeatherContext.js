import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("United States");

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=a816dc2a086b4c750d232e28587a565d`;

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.error(
            "Request failed with status code:",
            error.response.status
          );
          console.error("Error response:", error.response.data);
        } else {
          console.error("Error occurred:", error.message);
        }
      });

    setLocation("");
  }, [location]);
  return (
    <WeatherContext.Provider value={{ data, setData, location, setLocation }}>
      {children}
    </WeatherContext.Provider>
  );
}

export const useWeatherContext = () => useContext(WeatherContext);
