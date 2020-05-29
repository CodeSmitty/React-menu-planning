import React from "react";
import classes from './Navigation.module.css';

function Nav() {
  return (
    <div>
      
        <ul className={classes.Navigation}>
            {/* <li className={classes.active}><a href="">Home</a></li> */}
            {/* <li><a href="">Recipes</a></li>
            <li><a href="">Create Menu</a></li>
            <li><a href="">Archives</a></li> */}
        </ul>
    
    </div>
  );
}

export default Nav;