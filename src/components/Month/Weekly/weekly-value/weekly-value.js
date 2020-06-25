import React from "react";

const WeeklyValue = ({ handleClick, ...props }) => (
  <div onClick={handleClick} {...props}>
    <p>{props.serviceid}</p>
    <div>{props.children}</div>
  </div>
);

export default WeeklyValue;
