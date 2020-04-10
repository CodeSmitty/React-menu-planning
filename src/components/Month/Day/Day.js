import React from "react";
import Lunch from "./Lunch";
import Dinner from "./Dinner";

const Day = props => (
  <div className="sun">
    <h2>
      {props.dayName} <br />
      {props.dayMonth} {props.dayDate}
    </h2>
    <Lunch
      dayName={props.dayName}
      entres={props.entres}
      onAdd={props.onSubmit}
    />

    <Dinner />
  </div>
);

export default Day;
