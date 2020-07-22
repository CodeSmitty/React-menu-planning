import React from "react";
import "./input.styles.scss";

const input = (props) => {
  let inputElement = null;

  const { elementConfig } = props;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={[props.inputType].join(" ")}
          {...elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={[props.inputType].join(" ")}
          {...elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={[props.inputType].join(" ")}
          {...elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className="Input">
      <label className="Label">{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
