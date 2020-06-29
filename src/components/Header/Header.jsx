import React from "react";
import Navigation from "../Navigation/Navigation";
import classes from './Header.module.css';

function Header(props) {


  return (<div className={classes.Header}>
    <h1 className={classes.Beans}>
      Beans &
      <br/>
      Cornbread
    </h1>
    <Navigation />
  </div>);
}

export default Header;
