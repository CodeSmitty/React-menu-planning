import React from "react";
import classes from "./Modal.module.css";
import Card from "../../Card/Card";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => (
  <Card>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Card>
);

export default modal;
