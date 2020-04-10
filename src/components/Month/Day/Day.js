import React from "react";
import Lunch from "./Lunch";
import Card from "../../Card/Card";
import Dinner from "./Dinner";

const Day = props => (
  <div className="sun">
    <Card>
      <Lunch
        dayName={props.dayName}
        getCurrDate={props.dayDate}
        currMonth={props.dayMonth}
        entre={props.entres}
        onAdd={props.onSubmit}
      />

      <Dinner />
    </Card>
  </div>
);

export default Day;
