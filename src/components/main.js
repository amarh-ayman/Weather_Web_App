import React, { useEffect } from "react";
import axios from "axios";
import Search from "./search";
import WeatherDisplay from "./WeatherDisplay";
import SideBar from "./sideBar";
import { useWeatherContext } from "./WeatherContext";

function Main() {
  const { location, data, setData } = useWeatherContext();

  useEffect(() => {
    if (location) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

      axios.get(url).then((response) => {
        setData(response.data);
      });
    }
  }, [location, setData]);

  return (
    <React.Fragment>
      <Search />
      <div className="container">
        <WeatherDisplay />
        <SideBar />
      </div>
    </React.Fragment>
  );
}

export default Main;
