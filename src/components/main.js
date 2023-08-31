import React from "react";
import Search from "./search";
import WeatherDisplay from "./WeatherDisplay";
import SideBar from "./sideBar";


function Main() {
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
