import React from "react";
import { useWeatherContext } from "./WeatherContext";

function WeatherDisplay() {
  const { data } = useWeatherContext();

  const fahrenheitToCelsius = (fahrenheit) => {
    return (((fahrenheit - 32) * 5) / 9).toFixed();
  };

  const timestamp = data.dt;
  const date = new Date(timestamp * 1000);

  const getFormattedDate = () => {
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    const formattedDate = `${dayName} ${dayOfMonth} ${year}`;
    return formattedDate;
  };

  const getFormattedTime = () => {
    const date = new Date((timestamp + data.timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 || 12;

    // Format the time
    const formattedTime = `${formattedHours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${period}`;
    return formattedTime;
  };
  return (
    <div className="weather-dispaly">
      <div className="top">
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp">
          {data.main ? <h1>{fahrenheitToCelsius(data.main.temp)}°C</h1> : null}
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
        <div className="time_date">
          <p>
            <span className="time">{getFormattedTime()}</span>

            <span className="Date">{getFormattedDate()}</span>
          </p>
        </div>
      </div>

      <div className="bottom glass-overlay">
        <div className="feels">
          {data.main ? (
            <p className="bold">
              {fahrenheitToCelsius(data.main.feels_like)}°C
            </p>
          ) : null}
          <p>Feels Like</p>
        </div>
        <div className="humidity">
          {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
          <p>Humidity</p>
        </div>
        <div className="wind">
          {data.wind ? (
            <p className="bold">{data.wind.speed.toFixed()} MPH</p>
          ) : null}
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
