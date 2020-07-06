import React from "react";

const WeeklyValue = ({ ...props }) => (
  <div  {...props}>
    <p>{props.entre}</p>
    <p>{props.sideone}</p>
    <p>{props.sidetwo}</p>
    <p>{props.other}</p>
  </div>
);

export default WeeklyValue;
