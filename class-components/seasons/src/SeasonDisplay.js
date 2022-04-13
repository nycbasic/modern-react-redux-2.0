import React from "react";
import { getSeason } from "./helpers";
import "./SeasonDisplay.css"

const SeasonDisplay = ({ lat }) => {
  const month = new Date().getMonth();
  const season = getSeason(lat, month);

  return (
    <div className={"season-display " + season.season}>
      <i className={season.iconName + " massive icon icon-left"} />
      <h1>{season.text}</h1>
      <i className={season.iconName + " massive icon icon-right"} />
    </div>
  );
};

export default SeasonDisplay;