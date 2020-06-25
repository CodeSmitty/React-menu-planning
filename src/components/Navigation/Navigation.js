import React from "react";
import classes from './Navigation.module.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <ul className={classes.Navigation}>
     
      <Link  to='/'>Home</Link>
      <Link to='/recipes'>Recipe</Link>
      <Link  to='/create'>Crate Menu </Link>
      <Link to='/archives'> Archives</Link>
      
    </ul>
  );
}

export default Nav;