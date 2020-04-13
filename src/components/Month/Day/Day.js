import React from "react";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import classes from './Day.module.css'


const Day = props => (
  <div className={classes.Sun}>
    <h2 className={classes.Dates}>
      {props.dayName} <br />
      {props.dayMonth} {props.dayDate}
    </h2>
    <Lunch
      dayName={props.dayName}
      entres={props.entres}
      onAdd={props.onSubmit}
      sides={props.sides}
    />
    <Dinner
      dayName={props.dayName}
      dinnerEntres={props.dinnerEntres}
      dinnerSides={props.dinnerSides}
      onAdd={props.onSubmit}
    />
  </div>
);

export default Day;
